import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICoursePage } from "src/app/interfaces/course.interface";
import { COURSES } from "./courses-list.reducer";

export const featureSelector = createFeatureSelector<ICoursePage[]>(COURSES);

// export const CourseListSelector = createSelector(
//     featureSelector,
//     state => state.courseList
// )


