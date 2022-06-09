import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CoursePage } from '../interfaces/classes';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent implements OnInit {

  constructor() { }

  @Input() course!: CoursePage;
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }


  onDeleteClicked() {

    this.deleteClicked.emit()

  }



}
