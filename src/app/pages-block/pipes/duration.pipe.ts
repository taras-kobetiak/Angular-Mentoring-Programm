import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {

  transform(duration: number,): string {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;

    return hours > 1 ? `${hours} h ${minutes} min` :
      `${minutes} min`
  }
}