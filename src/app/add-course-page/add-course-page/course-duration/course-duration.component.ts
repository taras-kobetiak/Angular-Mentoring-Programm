import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss']
})
export class CourseDurationComponent {
  @Input() duration: number;
  @Output() durationChange: EventEmitter<number> = new EventEmitter()

  onDurationChange(): void {
    this.durationChange.emit(this.duration)
  }
}
