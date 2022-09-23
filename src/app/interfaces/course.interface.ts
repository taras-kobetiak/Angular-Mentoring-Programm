export interface ICoursePage extends IAddCourseData {
    id: string;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated: boolean;
    authors: string[];
}


export interface IAddCourseData {
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    authors: string[];
}