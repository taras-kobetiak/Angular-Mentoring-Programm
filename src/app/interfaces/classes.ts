import { ICoursePage } from "./course.interface";
import { IUserEntyty } from "./user-entyty.interface";

export class CoursePage implements ICoursePage {

    constructor(public id: string,
        public title: string,
        public creationDate: Date,
        public durationInMinutes: number,
        public description: string,
        public topRated: boolean = false) {
    }
}

export class User implements IUserEntyty {
    login: string;
    email: string;
    password: string;
    id: string;
    firstName: string;
    lastName: string;
}