import { Input, Pipe, PipeTransform } from '@angular/core';
import { CoursePage } from '../../interfaces/classes';

@Pipe({
  name: 'foundCourses'
})
export class FoundCoursesPipe implements PipeTransform {

  transform(courses: CoursePage[], inputData: string): CoursePage[] {
    return courses.sort((a, b) => this.isInclude(b.title, inputData)
      && !this.isInclude(a.title, inputData) ? 1 : -1)
  }

  isInclude(title: string, inputData: string): boolean {
    return title.toLowerCase().includes(inputData.toLowerCase())
  }
}


// transform(courses: CoursePage[], inputData: string): CoursePage[] {
//   return courses.sort((a, b) => b.title.toLowerCase().includes(inputData.toLowerCase())
//     && !a.title.toLowerCase().includes(inputData.toLowerCase()) ? 1 : -1)
// }