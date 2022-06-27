import { Pipe, PipeTransform } from '@angular/core';
import { ICoursePage } from 'src/app/interfaces/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICoursePage[]): ICoursePage[] {
    return courses.sort((a, b) => +b.creationDate - +a.creationDate)
  }

}
