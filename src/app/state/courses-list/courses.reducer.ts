import { createReducer, on } from "@ngrx/store";
import { ICoursePage } from "src/app/interfaces/course.interface";
import { getCoursesListAction, getCoursesListSuccessAction, getCourseSuccessAction } from "./courses.action";

export const COURSES = 'courses';

export interface ICourseState {
    courseList: ICoursePage[];
    currentCourse?: ICoursePage;
}

export const initialState: ICourseState = {
    courseList: [],
    currentCourse: undefined
}

export const courseListReducer = createReducer(
    initialState,
    on(getCoursesListSuccessAction, (state, action) => ({
        ...state,
        courseList: action.courseList
    })),

    on(getCourseSuccessAction, (state, action) => ({
        ...state,
        currentCourse: action.course
    })),

)
