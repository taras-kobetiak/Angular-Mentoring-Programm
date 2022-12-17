import { createFeatureSelector, createSelector } from "@ngrx/store";
import { COURSES_KEY, ICourseState } from "./courses.reducer";

export const featureSelector = createFeatureSelector<ICourseState>(COURSES_KEY);

export const AllCoursesListLengthSelector = createSelector(
    featureSelector,
    state => state.allCoursesLength
)

export const CoursesToShowListSelector = createSelector(
    featureSelector,
    state => state.coursesToShowList
)

export const CurrentCourseSelector = createSelector(
    featureSelector,
    state => state.currentCourse
)


