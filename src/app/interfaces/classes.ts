import { IPage } from "./course.interface";
import { IUserEntyty } from "./user-entyty.interface";

export class CoursePage implements IPage {
    id!: number;
    title!: string;
    creationDate!: Date;
    durationInMinutes!: number;
    description!: string;
}


export class User implements IUserEntyty {
    id!: number;
    firstName!: string;
    lastName!: string;

}