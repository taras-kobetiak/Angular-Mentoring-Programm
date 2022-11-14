import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ICoursePage } from '../../interfaces/course.interface';
import { CoursesService } from './services/courses.service';
import { debounceTime, distinctUntilChanged, filter, Subject, switchMap, takeUntil } from "rxjs";
import { LoadingService } from '../../modules/shared/loading-block/servises/loading.service';
import { FormControl } from '@angular/forms';
import { CoursePage } from '../../interfaces/classes';

const NUMBER_OF_ADD_COURSES: number = 3;

@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
})

export class PagesBlockComponent implements OnInit, OnDestroy {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  searchBox: FormControl;
  showLoadMore: boolean = true;
  courses: CoursePage[] = [];
  numberOfCourses: number = NUMBER_OF_ADD_COURSES;
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
    private coursesPagesService: CoursesService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.refreshCourse(), 0);
    this.searchFunction();
  }

  searchFunction(): void {
    this.searchBox = new FormControl('');

    this.searchBox.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(text => text !== null && text.length > 2 || text === ''),
      switchMap((inputData: string) => this.coursesPagesService.getFilteredList(inputData.toLowerCase())),
      takeUntil(this.unsubscribingData$)
    ).subscribe((courseData) => {
      this.courses = courseData;
    })
  }

  deleteComponent(id: string): void {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.coursesPagesService.deleteCourse(id).pipe(
        takeUntil(this.unsubscribingData$)
      ).subscribe(() => {
        this.refreshCourse();
      })
    }
  }

  loadNewCourses(): void {
    this.numberOfCourses += NUMBER_OF_ADD_COURSES;
    this.refreshCourse();
  }

  changeRate(course: ICoursePage): void {
    course.topRated = !course.topRated;
    this.loadingService.setValue(true);
    this.coursesPagesService.updateCourse(course).pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe(() => this.loadingService.setValue(false));
  }

  refreshCourse(): void {
    this.loadingService.setValue(true);

    let currentNumberOfCourses = this.courses.length;

    this.coursesPagesService.getCoursesList(this.numberOfCourses).pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe((coursesData) => {
      if (currentNumberOfCourses === coursesData.length) {
        this.showLoadMore = false;
      }
      this.courses = coursesData;

      this.loadingService.setValue(false);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }
}