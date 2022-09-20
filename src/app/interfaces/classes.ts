import { ICoursePage } from "./course.interface";
import { IUserEntyty } from "./user-entyty.interface";

export class CoursePage implements ICoursePage {

    constructor(public id: string,
        public title: string,
        public creationDate: string,
        public duration: number,
        public description: string,
        public topRated: boolean = false,
        public authors: string[]) {
    }

}

export class User implements IUserEntyty {
    token: string;
    login: string;
    email: string;
    password: string;
    id: string;
    firstName: string;
    lastName: string;
}