import { createAction } from '@ngrx/store'


export const isLoadingAddCoursePageFalse = createAction('[ADDCOURSEPAGE ISLOADING] false');
export const isLoadingAddCoursePageTrue = createAction('[ADDCOURSEPAGE ISLOADING] true');

export const isLoadingLoginFalse = createAction('[LOGINPAGE ISLOADING] false');
export const isLoadingLoginTrue = createAction('[LOGINPAGE ISLOADING] true');

export const isLoadingPagesBlockFalse = createAction('[PAGESBLOCK ISLOADING] false');
export const isLoadingPagesBlockTrue = createAction('[PAGESBLOCK ISLOADING] true');