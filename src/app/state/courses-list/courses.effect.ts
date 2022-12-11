import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ICoursePage } from "src/app/interfaces/course.interface";
import { CoursesService } from "src/app/modules/main-content/components/pages-block/services/courses.service";
import { getCoursesListAction, getCoursesListFailedAction, getCoursesListSuccessAction } from "./courses.action";

@Injectable()


export class CoursesListEffects {

    constructor(
        private actions$: Actions,
        private courseService: CoursesService
    ) { }

    coursesList$ = createEffect(() => this.actions$.pipe(
        ofType(getCoursesListAction),
        switchMap(() => this.courseService.getAllCoursesList().pipe(
            map((courses: ICoursePage[]) => {

                console.log(courses);


                return getCoursesListSuccessAction({ courseList: courses })

            }

            ),
            catchError(() => of(getCoursesListFailedAction))
        ))
    ))
}

