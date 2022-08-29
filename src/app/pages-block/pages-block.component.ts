import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from './services/courses.service';
import { debounceTime, distinctUntilChanged, filter, from, fromEvent, map, Observable, Subscription, switchMap } from "rxjs";


@Component({
  selector: 'app-pages-block',
  templateUrl: './pages-block.component.html',
  styleUrls: ['./pages-block.component.scss'],
})

export class PagesBlockComponent implements OnInit, OnDestroy {

  @Output() addButtonClicked: EventEmitter<void> = new EventEmitter()

  showLoadMore: boolean = true;
  courses: ICoursePage[] = [];
  numberOfCourses: number = 3;
  subscription$1: Subscription;
  subscription$2: Subscription;
  subscription$3: Subscription;
  subscription$4: Subscription;
  subscription$5: Subscription;

  constructor(private coursesPagesService: CoursesService,
    // private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.refreshCourse();

    const searchBox = document.getElementById('search-box') as HTMLInputElement;
    if (searchBox) {
      let searchData$ = fromEvent(searchBox, 'input').pipe(
        map(elem => (elem.target as HTMLInputElement).value),
        filter(text => text.length > 2 || text === ''),
        debounceTime(500),
        distinctUntilChanged(),
      );

      this.subscription$1 = searchData$.subscribe((inputData: string) => {
        if (inputData) {
          this.subscription$2 = from(this.coursesPagesService.getFilteredList(inputData.toLowerCase()))
            .subscribe((courseData) => this.courses = courseData);
        } else {
          this.refreshCourse();
        }
      });
    }
  }

  deleteComponent(id: string): void {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.subscription$3 = this.coursesPagesService.deleteCourse(id).subscribe(() => {
        this.refreshCourse();
      })
    }
  }

  loadNewCourses(): void {
    this.numberOfCourses += 3;
    this.refreshCourse()
  }

  changeRate(course: ICoursePage): void {
    course.topRated = !course.topRated;
    this.subscription$4 = this.coursesPagesService.updateCourse(course).subscribe();
  }

  refreshCourse(): void {
    // this.loadingService.setValue(true);
    let currentNumberOfCourses = this.courses.length;
    let newNumberOfCourses;

    this.subscription$5 = from(this.coursesPagesService.getCoursesList(this.numberOfCourses))
      .subscribe((courseData) => {
        this.courses = courseData;
        // this.loadingService.setValue(false);
        newNumberOfCourses = this.courses.length;
        if (currentNumberOfCourses === newNumberOfCourses) {
          this.showLoadMore = false;
        }
      });

  }

  ngOnDestroy(): void {
    if (this.subscription$1) {
      this.subscription$1.unsubscribe();
    }
    if (this.subscription$2) {
      this.subscription$2.unsubscribe();
    }
    if (this.subscription$3) {
      this.subscription$3.unsubscribe();
    }
    if (this.subscription$4) {
      this.subscription$4.unsubscribe();
    }
    if (this.subscription$5) {
      this.subscription$5.unsubscribe();
    }
  }
}
