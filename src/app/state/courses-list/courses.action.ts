import { createAction, props } from "@ngrx/store";
import { ICoursePage } from "src/app/interfaces/course.interface";

export const getCoursesListAction = createAction('[PAGES BLOCK] get courses list');
export const getCoursesListSuccessAction = createAction('[PAGES BLOCK] get courses list success',
    props<{ courseList: ICoursePage[] }>());
export const getCoursesListFailedAction = createAction('[PAGES BLOCK] get courses list failed');

export const getCourseAction = createAction('[PAGES BLOCK] get course', props<{ id: string }>());
export const getCourseSuccessAction = createAction('[PAGES BLOCK] get course success',
    props<{ course: ICoursePage }>());
export const getCourseFailedAction = createAction('[PAGES BLOCK] get course failed');

export const deleteCourseAction = createAction('[PAGES BLOCK] delete course', props<{ id: string }>());
export const deleteCourseSuccessAction = createAction('[PAGES BLOCK] delete course', props<{ id: string }>());
export const deleteCourseFailedAction = createAction('[PAGES BLOCK] delete course failed');

export const updateCourseAction = createAction('[PAGES BLOCK] update course', props<{ course: ICoursePage }>());
export const updateCourseSuccessAction = createAction('[PAGES BLOCK] update course success', props<{ course: ICoursePage }>());
export const updateCourseFailedAction = createAction('[PAGES BLOCK] update course failed');

export const createCourseAction = createAction('[PAGES BLOCK] create course', props<{ course: ICoursePage }>());
export const createCourseSuccessAction = createAction('[PAGES BLOCK] ucreate course success', props<{ course: ICoursePage }>());
export const createCourseFailedAction = createAction('[PAGES BLOCK] create course failed');
