import { createReducer, on } from "@ngrx/store";
import { ICoursePage } from "src/app/interfaces/course.interface";
import { createCourseAction, createCourseFailedAction, createCourseSuccessAction, deleteCourseAction, deleteCourseFailedAction, deleteCourseSuccessAction, getAllCoursesListAction, getAllCoursesListFailedAction, getAllCoursesListSuccessAction, getCourseAction, getCourseFailedAction, getCoursesToShowListAction, getCoursesToShowListFailedAction, getCoursesToShowListSuccessAction, getCourseSuccessAction, getFilteredCoursesListAction, getFilteredCoursesListFailedAction, getFilteredCoursesListSuccessAction, updateCourseAction, updateCourseFailedAction, updateCourseRatingAction, updateCourseRatingFailedAction, updateCourseRatingSuccessAction, updateCourseSuccessAction } from "./courses.action";

export const COURSES_KEY = 'courses';

export interface ICourseState {
    allCoursesList: ICoursePage[];
    allCoursesLength: number,
    coursesToShowList: ICoursePage[];
    isLoading: boolean;
    currentCourse?: ICoursePage;
}

export const initialState: ICourseState = {
    allCoursesList: [],
    allCoursesLength: 0,
    coursesToShowList: [],
    isLoading: false
}

export const courseListReducer = createReducer(
    initialState,

    on(
        getAllCoursesListAction,
        getCoursesToShowListAction,
        getFilteredCoursesListAction,
        getCourseAction,
        deleteCourseAction,
        updateCourseRatingAction,
        updateCourseAction,
        createCourseAction,
        (state) => ({
            ...state,
            isLoading: true
        })),

    on(getAllCoursesListSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: action.courseList,
        allCoursesLength: action.courseList.length,
        isLoading: false
    })),

    on(getCoursesToShowListSuccessAction, (state, action) => ({
        ...state,
        coursesToShowList: action.courseToShowList,
        isLoading: false
    })),

    on(getFilteredCoursesListSuccessAction, (state, action) => ({
        ...state,
        coursesToShowList: action.courseFilteredList,
        isLoading: false
    })),

    on(getCourseSuccessAction, (state, action) => ({
        ...state,
        currentCourse: action.course,
        isLoading: false
    })),

    on(deleteCourseSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: state.allCoursesList.filter((course: ICoursePage) => course.id !== action.id),
        isLoading: false
    })),

    on(updateCourseRatingSuccessAction, updateCourseSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: state.allCoursesList.map((course: ICoursePage) => course.id === action.course.id ? action.course : course),
        isLoading: false
    })),

    on(createCourseSuccessAction, (state, action) => ({
        ...state,
        allCoursesList: [...state.allCoursesList, action.course],
        isLoading: false
    })),

    on(
        getAllCoursesListFailedAction,
        getCoursesToShowListFailedAction,
        getFilteredCoursesListFailedAction,
        getCourseFailedAction,
        deleteCourseFailedAction,
        updateCourseRatingFailedAction,
        updateCourseFailedAction,
        createCourseFailedAction, (state) => ({
            ...state,
            isLoading: false
        })),
)
