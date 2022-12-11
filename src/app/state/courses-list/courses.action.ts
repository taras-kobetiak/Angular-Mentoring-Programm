import { createAction, props } from "@ngrx/store";
import { ICoursePage } from "src/app/interfaces/course.interface";

export const getCoursesListAction = createAction('[PAGES BLOCK] get courses list');
export const getCoursesListSuccessAction = createAction('[PAGES BLOCK] get courses list success',
    props<{ courseList: ICoursePage[] }>());
export const getCoursesListFailedAction = createAction('[PAGES BLOCK] get courses list failed');