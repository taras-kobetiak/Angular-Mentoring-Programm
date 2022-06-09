import { IPage } from "./course.interface";
import { IUserEntyty } from "./user-entyty.interface";

export class CoursePage implements IPage {
    constructor(public id: number,
        public title: string,
        public creationDate: Date,
        public durationInMinutes: number,
        public description: string) { }


    createHourAndMinutes(): string {
        return this.course.creationDate.getHours() + 'h ' + this.course.creationDate.getMinutes() + 'min'
    }

    createYearAndMonth(): string {
        let month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.course.creationDate.getDate() + ' ' + month[this.course.creationDate.getMonth()] + ', ' + this.course.creationDate.getFullYear()
    }

}


export class User implements IUserEntyty {
    id!: number;
    firstName!: string;
    lastName!: string;

}