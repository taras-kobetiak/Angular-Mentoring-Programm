export interface ICoursePage extends ICoursePageRender {
    id: string;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated: boolean;
    authors: string[];
}


export interface ICoursePageRender {
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    authors: string[];
}