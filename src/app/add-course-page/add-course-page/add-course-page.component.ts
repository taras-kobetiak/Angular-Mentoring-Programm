import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ICoursePage } from 'src/app/interfaces/course.interface';
import { CoursesService } from 'src/app/pages-block/services/courses.service';
import { LoadingService } from 'src/app/shared/loading-block/servises/loading.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  courses: ICoursePage[];
  course: ICoursePage;
  temporaryId: number = 1;
  courseId: any;

  authors: string;

  courseForm: FormGroup;

  defaultCourseData: ICoursePage = {
    id: '',
    title: '',
    creationDate: '',
    duration: 0,
    description: '',
    topRated: false,
    authors: ['']
  };

  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: CoursesService,
    private loadingService: LoadingService,
    private formBuilder: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.course = this.defaultCourseData;
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId) {
      setTimeout(() => this.takeCourseData());
    }
    this.courseForm = this.formBuilder.group({
      courseTitle: ['', [Validators.required, Validators.maxLength(50)]],
      courseDescription: '',
      courseDuration: 0,
      courseCreationDate: ['']
    })

    this.courseForm.controls['courseTitle'].valueChanges.subscribe(title => {
      this.course.title = title;
    });

    this.courseForm.controls['courseDescription'].valueChanges.subscribe(description => {
      this.course.description = description;
    });

    this.courseForm.controls['courseDuration'].valueChanges.subscribe(duration => {
      this.course.duration = duration;
    })

    this.courseForm.controls['courseCreationDate'].valueChanges.subscribe(creationDate => {
      this.course.creationDate = creationDate;
    })
  }

  onSubmit(): void {
    this.loadingService.setValue(true);

    this.course.id ? this.updateCourse() :
      this.addNewCourse();
  }

  updateCourse(): void {
    this.courseService.updateCourse(this.course).pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe(() => {
      this.loadingService.setValue(false);
      this.backToCoursesList();
    })
  }

  addNewCourse(): void {
    this.course.id = uuidv4();
    this.courseService.addCourses(this.course).pipe(
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
      this.course = course;
      this.loadingService.setValue(false);
      this.courseService.currentCourseTitle$.next(this.course.title);

      this.courseForm.patchValue({
        courseTitle: this.course.title,
        courseDescription: this.course.description,
        courseDuration: this.course.duration,
        courseCreationDate: this.course.creationDate,

      })
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
