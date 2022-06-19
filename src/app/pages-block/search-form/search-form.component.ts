import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() findClick: EventEmitter<string> = new EventEmitter()
  inputData: string;

  onFindClick() {
    this.findClick.emit(this.inputData)
  }



}
