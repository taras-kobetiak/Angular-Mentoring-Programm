import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  @Output() loadClick: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onLoadClick() {
    this.loadClick.emit()
  }
}
