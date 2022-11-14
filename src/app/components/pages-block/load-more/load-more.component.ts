import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  @Output() loadClick: EventEmitter<void> = new EventEmitter()


  onLoadClick(): void {
    this.loadClick.emit()
  }
}
