import { Pipe, PipeTransform } from '@angular/core';
import { CoursePage } from 'src/app/interfaces/classes';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CoursePage[]): CoursePage[] {
    return courses.sort((a, b) => +b.creationDate - +a.creationDate)
  }

}
