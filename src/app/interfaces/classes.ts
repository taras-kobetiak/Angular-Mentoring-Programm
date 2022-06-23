import { IPage } from "./course.interface";
import { IUserEntyty } from "./user-entyty.interface";

export class CoursePage implements IPage {
    // public get description(): string {
    //     return this._description;
    // }
    // public set description(value: string) {
    //     if (value.length > 190)
    //         this._description = value.slice(0, 189) + '...';
    // }
    constructor(public id: number,
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
    id: number;
    firstName: string;
    lastName: string;
}