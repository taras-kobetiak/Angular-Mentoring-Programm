import { Input, Pipe, PipeTransform } from '@angular/core';
import { CoursePage } from '../../interfaces/classes';

@Pipe({
  name: 'foundCourses'
})
export class FoundCoursesPipe implements PipeTransform {

  transform(courses: CoursePage[], inputData: string): CoursePage[] {
    return courses.sort((a, b) => b.title.toLowerCase().includes(inputData.toLowerCase())
      && !a.title.toLowerCase().includes(inputData.toLowerCase()) ? 1 : -1)
  }
}
