import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ICoursePage } from '../interfaces/course.interface';
import { CoursesService } from './services/courses.service';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Subject, takeUntil } from "rxjs";
import { LoadingService } from '../shared/loading-block/servises/loading.service';


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
  private currentSubscribes: Subject<void> = new Subject<void>();

  constructor(private coursesPagesService: CoursesService, private loadingService: LoadingService) { }

  ngOnInit(): void {

    setTimeout(() => this.refreshCourse(), 0);
    this.searchFunction();
  }

  searchFunction(): void {
    const searchBox = document.getElementById('search-box') as HTMLInputElement;
    if (searchBox) {
      let searchData$ = fromEvent(searchBox, 'input').pipe(
        map(elem => (elem.target as HTMLInputElement).value),
        filter(text => text.length > 2 || text === ''),
        debounceTime(500),
        distinctUntilChanged(),
      );

      searchData$.pipe(
        takeUntil(this.currentSubscribes)
      ).subscribe((inputData: string) => {
        if (inputData) {
          this.coursesPagesService.getFilteredList(inputData.toLowerCase()).pipe(
            takeUntil(this.currentSubscribes)
          ).subscribe((courseData) => this.courses = courseData);
        } else {
          this.refreshCourse();
        }
      });
    }
  }

  deleteComponent(id: string): void {
    if (confirm('Do you really want to delete this course? Yes/No')) {
      this.coursesPagesService.deleteCourse(id).pipe(
        takeUntil(this.currentSubscribes)
      ).subscribe(() => {
        this.refreshCourse();
      })
    }
  }

  loadNewCourses(): void {
    this.numberOfCourses += 3;
    this.refreshCourse();
  }

  changeRate(course: ICoursePage): void {
    course.topRated = !course.topRated;
    this.loadingService.setValue(true);
    this.coursesPagesService.updateCourse(course).pipe(
      takeUntil(this.currentSubscribes)
    ).subscribe();
    this.loadingService.setValue(false);
  }

  refreshCourse(): void {
    this.loadingService.setValue(true);
    let currentNumberOfCourses = this.courses.length;
    let newNumberOfCourses;

    this.coursesPagesService.getCoursesList(this.numberOfCourses).pipe(
      takeUntil(this.currentSubscribes)
    ).subscribe((courseData) => {
      this.courses = courseData;
      this.loadingService.setValue(false);
      newNumberOfCourses = this.courses.length;
      if (currentNumberOfCourses === newNumberOfCourses) {
        this.showLoadMore = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.currentSubscribes.next();
    this.currentSubscribes.complete();
  }
}
