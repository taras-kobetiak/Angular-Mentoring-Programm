import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAuthor } from 'src/app/interfaces/authors.interface';
import { CoursesService } from 'src/app/modules/main-content/components/pages-block/services/courses.service';
import { createCourseAction, getCourseAction, updateCourseAction } from 'src/app/state/courses/courses.action';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  authorsFilteredList: IAuthor[];
  courseId: any;

  courseForm: FormGroup;

  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId) {
      setTimeout(() => this.takeCourseData());

      this.store.dispatch(getCourseAction({ id: this.courseId }))

    }
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      duration: [0, [Validators.required, Validators.min(1)]],
      creationDate: ['', Validators.required],
      authors: [[], Validators.required],
      id: '',
      topRated: false,
    })
  }

  onSubmit(): void {
    this.courseForm.get('id')?.value ? this.updateCourse() :
      this.addNewCourse();
  }

  updateCourse(): void {
    this.store.dispatch(updateCourseAction({ course: this.courseForm.value }))
  }

  addNewCourse(): void {
    this.store.dispatch(createCourseAction({ course: { id: uuidv4(), ...this.courseForm.value } }))
  }

  takeCourseData(): void {

    this.courseService.getCourseById(this.courseId).pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe(course => {
      this.courseForm.setValue(course);
    });
  }

  backToCoursesList(): void {
    this.router.navigate(['/courses']);
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }
}
