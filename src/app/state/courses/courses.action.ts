import { createAction, props } from "@ngrx/store";
import { IAuthor } from "src/app/interfaces/authors.interface";
import { ICoursePage } from "src/app/interfaces/course.interface";

export const getAllCoursesListAction = createAction('[PAGES BLOCK] get all courses list');
export const getAllCoursesListSuccessAction = createAction('[PAGES BLOCK] get all courses list success',
    props<{ courseList: ICoursePage[] }>());
export const getAllCoursesListFailedAction = createAction('[PAGES BLOCK] get all courses list failed');

export const getCoursesToShowListAction = createAction('[PAGES BLOCK] get courses to show list',
    props<{ numberOfCourses: number }>());
export const getCoursesToShowListSuccessAction = createAction('[PAGES BLOCK] get courses to show list success',
    props<{ courseToShowList: ICoursePage[] }>());
export const getCoursesToShowListFailedAction = createAction('[PAGES BLOCK] get courses to show list failed');

export const getFilteredCoursesListAction = createAction('[PAGES BLOCK] get filtered courses list',
    props<{ inputData: string }>());
export const getFilteredCoursesListSuccessAction = createAction('[PAGES BLOCK] get filtered courses list success',
    props<{ courseFilteredList: ICoursePage[] }>());
export const getFilteredCoursesListFailedAction = createAction('[PAGES BLOCK] get filtered courses list failed');

export const getCourseAction = createAction('[PAGES BLOCK] get course', props<{ id: string }>());
export const getCourseSuccessAction = createAction('[PAGES BLOCK] get course success',
    props<{ course: ICoursePage }>());
export const getCourseFailedAction = createAction('[PAGES BLOCK] get course failed');

export const deleteCourseAction = createAction('[PAGES BLOCK] delete course', props<{ id: string }>());
export const deleteCourseSuccessAction = createAction('[PAGES BLOCK] delete course', props<{ id: string }>());
export const deleteCourseFailedAction = createAction('[PAGES BLOCK] delete course failed');

export const updateCourseRatingAction = createAction('[PAGES BLOCK] update course rating', props<{ course: ICoursePage }>());
export const updateCourseRatingSuccessAction = createAction('[PAGES BLOCK] update course rating success', props<{ course: ICoursePage }>());
export const updateCourseRatingFailedAction = createAction('[PAGES BLOCK] update course rating failed');

export const updateCourseAction = createAction('[ADD COURSE] update course', props<{ course: ICoursePage }>());
export const updateCourseSuccessAction = createAction('[ADD COURS] update course success', props<{ course: ICoursePage }>());
export const updateCourseFailedAction = createAction('[ADD COURS] update course failed');

export const createCourseAction = createAction('[PAGES BLOCK] create course', props<{ course: ICoursePage }>());
export const createCourseSuccessAction = createAction('[PAGES BLOCK] create course success', props<{ course: ICoursePage }>());
export const createCourseFailedAction = createAction('[PAGES BLOCK] create course failed');



