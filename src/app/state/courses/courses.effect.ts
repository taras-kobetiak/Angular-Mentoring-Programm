import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ICoursePage } from "src/app/interfaces/course.interface";
import { CoursesService } from "src/app/modules/main-content/components/pages-block/services/courses.service";
import { createCourseAction, createCourseFailedAction, createCourseSuccessAction, deleteCourseAction, deleteCourseFailedAction, deleteCourseSuccessAction, getCourseAction, getCourseFailedAction, getAllCoursesListAction, getAllCoursesListFailedAction, getAllCoursesListSuccessAction, getCourseSuccessAction, updateCourseRatingAction, updateCourseRatingFailedAction, updateCourseRatingSuccessAction, getFilteredCoursesListAction, getFilteredCoursesListSuccessAction, getFilteredCoursesListFailedAction, getCoursesToShowListAction, getCoursesToShowListSuccessAction, updateCourseAction, updateCourseFailedAction, updateCourseSuccessAction } from "./courses.action";

@Injectable()
export class CoursesListEffects {

    constructor(
        private actions$: Actions,
        private courseService: CoursesService,
        private router: Router
    ) { }

    getCoursesList$ = createEffect(() => this.actions$.pipe(
        ofType(getAllCoursesListAction),
        switchMap(() => this.courseService.getAllCoursesList().pipe(
            map((courses: ICoursePage[]) => {
                return getAllCoursesListSuccessAction({ courseList: courses })
            }),
            catchError(() => of(getAllCoursesListFailedAction))
        ))
    ))

    getCoursesFilteredList$ = createEffect(() => this.actions$.pipe(
        ofType(getFilteredCoursesListAction),
        switchMap(({ inputData }) => this.courseService.getFilteredList(inputData).pipe(
            map((courseFilteredList: ICoursePage[]) => getFilteredCoursesListSuccessAction({ courseFilteredList })),
            catchError(() => of(getFilteredCoursesListFailedAction))
        ))
    ))

    getCoursesToShowList$ = createEffect(() => this.actions$.pipe(
        ofType(getCoursesToShowListAction),
        switchMap(({ numberOfCourses }) => this.courseService.getCoursesList(numberOfCourses).pipe(
            map((courseToShowList: ICoursePage[]) => getCoursesToShowListSuccessAction({ courseToShowList }))
        ))
    ))

    deleteCourse$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCourseAction),
        switchMap(({ id }) => this.courseService.deleteCourse(id).pipe(
            map(() => deleteCourseSuccessAction({ id })),
            catchError(() => of(deleteCourseFailedAction))
        ))
    ))

    getCourse$ = createEffect(() => this.actions$.pipe(
        ofType(getCourseAction),
        switchMap(({ id }) => this.courseService.getCourseById(id).pipe(
            map((course: ICoursePage) => getCourseSuccessAction({ course })),
            catchError(() => of(getCourseFailedAction))
        ))
    ))

    updateCourseRating$ = createEffect(() => this.actions$.pipe(
        ofType(updateCourseRatingAction),
        switchMap(({ course }) => this.courseService.updateCourse(course).pipe(
            map(() => updateCourseRatingSuccessAction({ course })),
            catchError(() => of(updateCourseRatingFailedAction))
        ))
    ))

    updateCourse$ = createEffect(() => this.actions$.pipe(
        ofType(updateCourseAction),
        switchMap(({ course }) => this.courseService.updateCourse(course).pipe(
            map(() => updateCourseSuccessAction({ course })),
            tap(() => {
                this.router.navigate(['courses']);
            }),
            catchError(() => of(updateCourseFailedAction))
        ))
    ))

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType(createCourseAction),
        switchMap(({ course }) => this.courseService.addCourses(course).pipe(
            map(() => createCourseSuccessAction({ course })),
            tap(() => {
                this.router.navigate(['courses']);
            }),
            catchError(() => of(createCourseFailedAction))
        ))
    ))
}



