import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, debounceTime, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { IAuthors } from 'src/app/interfaces/authors.interface';
import { ICoursePage } from 'src/app/interfaces/course.interface';
import { CoursesService } from 'src/app/pages-block/services/courses.service';
import { LoadingService } from 'src/app/shared/loading-block/servises/loading.service';
import { v4 as uuidv4 } from 'uuid';
import { AuthorsService } from '../services/authors.service';

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
    private authorsService: AuthorsService
  ) { }

  ngOnInit(): void {

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId) {
      setTimeout(() => this.takeCourseData());
    }
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: '',
      duration: 0,
      creationDate: [''],
      authors: [[], this.authorValidator],
      id: '',
      topRated: false,
    })

    this.courseForm.get('authors')?.valueChanges.pipe(
      debounceTime(300),
      switchMap((inputData: string) => this.authorsService.getFilteredAuthorsList(inputData)),
      takeUntil(this.unsubscribingData$)
    ).subscribe((authorsList: any) => {


      this.authorsFilteredList = authorsList;
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
    this.courseForm.get('id')?.setValue(uuidv4());

    this.courseService.addCourses(this.courseForm.value).pipe(
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

  addNewAuthor(author: IAuthors) {
    // if (this.course.authors[0] === '') {
    //   this.course.authors = this.course.authors.slice(0, -1).concat(author.fullName);
    //   this.courseForm.get('courseAuthors')?.setValue('');
    // } else {
    //   if (!this.course.authors.find(c => c === author.fullName)) {
    //     this.course.authors = this.course.authors.concat(author.fullName);
    //     this.courseForm.get('courseAuthors')?.setValue('');
    //   }
    // }
  }

  deleteAuthor(authorName: string) {
    // this.course.authors = this.course.authors.filter(author => author !== authorName);
  }

  authorValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value === '' ? { authorsInvalid: true } :
      null
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
    this.courseService.currentCourseTitle$.next('')
  }
}
