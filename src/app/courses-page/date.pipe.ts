import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateHour'
})

export class DateHour implements PipeTransform {
    transform(value: any, ...args: any[]): string {
        return value.getHours() + 'h ' + value.getMinutes() + 'min'
    }
}


