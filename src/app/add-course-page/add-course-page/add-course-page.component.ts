import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
import { IAuthors } from 'src/app/interfaces/authors.interface';
import { ICoursePage, ICoursePageRender } from 'src/app/interfaces/course.interface';
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
  course: ICoursePage;
  temporaryId: number = 1;
  courseId: any;

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
    private formBuilder: FormBuilder,
    private authorsService: AuthorsService
  ) { }

  ngOnInit(): void {
    this.course = this.defaultCourseData;
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId) {
      setTimeout(() => this.takeCourseData());
    }
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: '',
      duration: 0,
      creationDate: [''],
      authors: [[], this.authorValidator]
    })


    // combineLatest(this.courseForm.valueChanges).subscribe((courseData: any) => {
    //   let course1: ICoursePageRender = courseData;
    //   console.log(course1);

    //   this.course.title = courseData.title;
    // })

    this.courseForm.get('title')?.valueChanges.subscribe(title => {
      this.course.title = title;
    });

    this.courseForm.get('description')?.valueChanges.subscribe(description => {
      this.course.description = description;
    });

    this.courseForm.get('creationDate')?.valueChanges.subscribe(creationDate => {
      this.course.creationDate = creationDate;
    });

    this.courseForm.get('duration')?.valueChanges.subscribe(duration => {
      this.course.duration = duration;
    });

    this.courseForm.get('authors')?.valueChanges.pipe(
      // debounceTime(300),
      switchMap((inputData: string) => this.authorsService.getFilteredAuthorsList(inputData)),
      takeUntil(this.unsubscribingData$)
    ).subscribe((authorsList: any) => {
      this.authorsFilteredList = authorsList;
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
        title: this.course.title,
        description: this.course.description,
        creationDate: this.course.creationDate,
        duration: this.course.duration,

      })
    });
  }

  backToCoursesList(): void {
    this.router.navigate(['/courses']);
  }

  addNewAuthor(author: IAuthors) {

    if (this.course.authors[0] === '') {
      this.course.authors = this.course.authors.slice(0, -1).concat(author.fullName);
      this.courseForm.get('courseAuthors')?.setValue('');
    } else {
      if (!this.course.authors.find(c => c === author.fullName)) {
        this.course.authors = this.course.authors.concat(author.fullName);
        this.courseForm.get('courseAuthors')?.setValue('');
      }
    }
  }

  deleteAuthor(authorName: string) {
    this.course.authors = this.course.authors.filter(author => author !== authorName);
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
