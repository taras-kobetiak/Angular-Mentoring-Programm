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
        public description: string) {
    }

    createHourAndMinutes(): string {
        return this.creationDate.getHours() + 'h ' + this.creationDate.getMinutes() + 'min'
    }

    createYearAndMonth(): string {
        let month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.creationDate.getDate() + ' ' + month[this.creationDate.getMonth()] + ', ' + this.creationDate.getFullYear()
    }

}

export class User implements IUserEntyty {
    id!: number;
    firstName!: string;
    lastName!: string;
}