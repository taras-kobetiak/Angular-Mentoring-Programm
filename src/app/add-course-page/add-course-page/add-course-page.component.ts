import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subject, switchMap, takeUntil } from 'rxjs';
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
      courseTitle: ['', [Validators.required, Validators.maxLength(50)]],
      courseDescription: '',
      courseDuration: 0,
      courseCreationDate: [''],
      courseAuthors: [['']]
    })

    this.courseForm.get('courseTitle')?.valueChanges.subscribe(title => {
      this.course.title = title;
    });

    this.courseForm.get('courseDescription')?.valueChanges.subscribe(description => {
      this.course.description = description;
    });

    this.courseForm.get('courseCreationDate')?.valueChanges.subscribe(creationDate => {
      this.course.creationDate = creationDate;
    });

    this.courseForm.get('courseDuration')?.valueChanges.subscribe(duration => {
      this.course.duration = duration;
    });

    this.courseForm.get('courseAuthors')?.valueChanges.pipe(
      debounceTime(300),
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
        courseTitle: this.course.title,
        courseDescription: this.course.description,
        courseCreationDate: this.course.creationDate,
        courseDuration: this.course.duration,

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
    console.log(authorName);

    this.course.authors = this.course.authors.filter(author => author !== authorName);
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
    this.courseService.currentCourseTitle$.next('')
  }
}
