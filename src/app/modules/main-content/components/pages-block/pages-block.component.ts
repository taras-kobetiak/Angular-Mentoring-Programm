import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ICoursePage } from '../../../../interfaces/course.interface';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, takeUntil } from "rxjs";
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { deleteCourseAction, getAllCoursesListAction, getCoursesToShowListAction, getFilteredCoursesListAction, updateCourseRatingAction } from 'src/app/state/courses/courses.action';
import { AllCoursesListLengthSelector, CoursesToShowListSelector } from 'src/app/state/courses/courses.selector';

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
  numberOfCourses: number = NUMBER_OF_ADD_COURSES;
  courses$: Observable<ICoursePage[]> = this.store.select(CoursesToShowListSelector);
  allCoursesLength$: Observable<number> = this.store.select(AllCoursesListLengthSelector);
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.refreshCourse()
    this.searchFunction();
  }

  searchFunction(): void {
    this.searchBox = new FormControl('');
    this.searchBox.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(text => text !== null && text.length > 2 || text === ''),
      takeUntil(this.unsubscribingData$)
    ).subscribe((inputData) => {
      this.store.dispatch(getFilteredCoursesListAction({ inputData }))
    })
  }

  deleteComponent(id: string): void {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.store.dispatch(deleteCourseAction({ id: id }))
      this.refreshCourse();
    }
  }

  loadNewCourses(): void {
    this.numberOfCourses += NUMBER_OF_ADD_COURSES;
    this.refreshCourse();
  }

  changeRate(course: ICoursePage): void {
    let newCourse = { ...course };
    newCourse.topRated = !newCourse.topRated;
    this.store.dispatch(updateCourseRatingAction({ course: newCourse }));
    this.refreshCourse();
  }

  refreshCourse(): void {
    this.store.dispatch(getAllCoursesListAction())

    this.allCoursesLength$.pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe((allCoursesLength) => {
      allCoursesLength > this.numberOfCourses ? this.showLoadMore = true :
        this.showLoadMore = false;
    })

    this.store.dispatch(getCoursesToShowListAction({ numberOfCourses: this.numberOfCourses }))
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }
}