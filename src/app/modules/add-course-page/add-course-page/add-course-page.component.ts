import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IAuthors } from 'src/app/interfaces/authors.interface';
import { CoursesService } from 'src/app/modules/main-content/components/pages-block/services/courses.service';
import { LoadingService } from 'src/app/modules/shared/loading-block/servises/loading.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  authorsFilteredList: IAuthors[];
  temporaryId: number = 1;
  courseId: any;

  courseForm: FormGroup;

  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService,
    private loadingService: LoadingService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId) {
      setTimeout(() => this.takeCourseData());
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
    this.loadingService.setValue(true);

    this.courseForm.get('id')?.value ? this.updateCourse() :
      this.addNewCourse();
  }

  updateCourse(): void {
    this.courseService.updateCourse(this.courseForm.value).pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe(() => {
      this.loadingService.setValue(false);
      this.backToCoursesList();
    })
  }

  addNewCourse(): void {
    this.courseService.addCourses({ id: uuidv4(), ...this.courseForm.value }).pipe(
      takeUntil(this.unsubscribingData$))
      .subscribe(() => {
        this.loadingService.setValue(false);
        this.backToCoursesList();
      })
  }

  takeCourseData(): void {
    this.loadingService.setValue(true);

    this.courseService.getCourseById(this.courseId).pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe(course => {
      this.loadingService.setValue(false);
      this.courseForm.setValue(course);

      this.courseService.currentCourseTitle$.next(this.courseForm.get('title')?.value);
    });
  }

  backToCoursesList(): void {
    this.router.navigate(['/courses']);
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
    this.courseService.currentCourseTitle$.next('')
  }
}
