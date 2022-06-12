import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {







  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.alertMessage()
  }
  alertMessage() {
    alert('Don`t do it. I know you haven`t realized the wondering of this page yet.')

  }

}
