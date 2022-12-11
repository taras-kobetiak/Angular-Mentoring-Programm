import { createFeatureSelector, createSelector } from "@ngrx/store";
import { COURSES, ICourseState } from "./courses.reducer";

export const featureSelector = createFeatureSelector<ICourseState>(COURSES);

export const CourseListSelector = createSelector(
    featureSelector,
    state => state.courseList
)


