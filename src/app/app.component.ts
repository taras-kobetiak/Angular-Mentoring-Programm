import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  popIsHidden: boolean = true;
  wrongButton: boolean = false;
  newHidden: boolean = true;

  ngOnInit(): void {
    this.hiddenSetTimeOut(3000)
  }


  hiddenPop1(): void {
    this.popIsHidden = true;
    this.hiddenSetTimeOut(1500)
    console.log(1);
  }

  hiddenPop3(): void {
    this.newHidden = false;
    setTimeout(() => this.newHidden = true, 1200)

  }

  hiddenPop4(): any {
    let a = confirm('Are you sure?')
    if (a) {
      alert('It was only your choise');
      document.location.href = 'https://youtu.be/uo2avxee7Jk?t=34'
    }

  }


  hiddenSetTimeOut(a: number) {
    setTimeout(() => this.popIsHidden = false, a)
  }
}
