import { createReducer, on } from "@ngrx/store";
import { ICoursePage } from "src/app/interfaces/course.interface";
import { createCourseSuccessAction, deleteCourseSuccessAction, getAllCoursesListAction, getAllCoursesListSuccessAction, getCoursesToShowListSuccessAction, getCourseSuccessAction, getFilteredCoursesListSuccessAction, updateCourseSuccessAction } from "./courses.action";

export const COURSES = 'courses';

export interface ICourseState {
    allCoursesList: ICoursePage[];
    allCoursesLength: number,
    coursesToShowList: ICoursePage[];
    currentCourse?: ICoursePage;
}

export const initialState: ICourseState = {
    allCoursesList: [],
    allCoursesLength: 0,
    coursesToShowList: [],
}

export const courseListReducer = createReducer(
    initialState,
    on(getAllCoursesListSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: action.courseList,
        allCoursesLength: action.courseList.length
    })),

    on(getCoursesToShowListSuccessAction, (state, action) => ({
        ...state,
        coursesToShowList: action.courseToShowList
    })),

    on(getFilteredCoursesListSuccessAction, (state, action) => ({
        ...state,
        coursesToShowList: action.courseFilteredList
    })),

    on(getCourseSuccessAction, (state, action) => ({
        ...state,
        currentCourse: action.course
    })),

    on(deleteCourseSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: state.allCoursesList.filter((course: ICoursePage) => course.id !== action.id)
    })),

    on(updateCourseSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: state.allCoursesList.map((course: ICoursePage) => course.id === action.course.id ? action.course : course)
    })),

    on(createCourseSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: [...state.allCoursesList, action.course]
    }))

)
