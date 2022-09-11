import { Pipe, PipeTransform } from '@angular/core';
import { ICoursePage } from 'src/app/interfaces/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICoursePage[]): ICoursePage[] {
    return courses.sort((a, b): number => {
      return new Date(b.creationDate) > new Date(a.creationDate) ? 1 :
        -1;
    })
  }
}
