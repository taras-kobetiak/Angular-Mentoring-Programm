import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-nice-pop-up',
  templateUrl: './nice-pop-up.component.html',
  styleUrls: ['./nice-pop-up.component.scss']
})
export class NicePopUpComponent implements OnInit {
  @Output() click1: EventEmitter<void> = new EventEmitter()
  @Output() click3: EventEmitter<void> = new EventEmitter();
  @Output() click4: EventEmitter<void> = new EventEmitter()
  @Output() click5: EventEmitter<void> = new EventEmitter()


  toggle: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }



  onClick1(): void {
    this.click1.emit()
  }


  onClick3(): void {
    this.click3.emit()
  }

  onClick4(): void {
    this.click4.emit()
  }

  onClick5(): void {
    this.click5.emit()
  }


}
