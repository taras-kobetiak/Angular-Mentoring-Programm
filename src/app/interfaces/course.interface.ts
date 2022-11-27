export interface ICoursePage extends IAddCourseData {
    id: string;
    topRated: boolean;
}


export interface IAddCourseData {
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    authors: string[];
}