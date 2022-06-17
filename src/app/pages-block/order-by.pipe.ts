import { Pipe, PipeTransform } from '@angular/core';
import { CoursePage } from '../interfaces/classes';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(courses: CoursePage[]): CoursePage[] {
    return courses.sort((a, b) => +b.creationDate - +a.creationDate);
  }

}
