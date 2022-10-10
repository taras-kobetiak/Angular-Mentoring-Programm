import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IAuthors } from 'src/app/interfaces/authors.interface';


@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseAuthorsComponent),
      multi: true,
    }
  ]
})
export class CourseAuthorsComponent implements OnInit, ControlValueAccessor {

  @Input() currentAuthorsList: string[];
  @Input() authorsFilteredList: IAuthors[];
  @Output() authorNameClick: EventEmitter<IAuthors> = new EventEmitter();
  @Output() authorDeleteClick: EventEmitter<string> = new EventEmitter();

  onChange: any;
  onTouched: any;
  showAuthorsList: boolean;
  input: HTMLElement | null = document.getElementById('input');
  authors = new FormControl();

  ngOnInit(): void {
    this.authors.valueChanges.subscribe(authors => {
      if (this.onChange) {
        this.onChange(authors);
      }
    });
  }

  writeValue(obj: string): void {
    this.authors.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onFocus(): void {
    this.showAuthorsList = true;
  }

  onBlur(): void {
    this.onTouched();
  }

  onAuthorNameClick(author: IAuthors): void {
    this.authorNameClick.emit(author);

    this.showAuthorsList = false;
    this.authors.setValue('');
  }

  onAuthorDeleteClick(authorName: string): void {
    this.authorDeleteClick.emit(authorName);
  }

  focusOnInput(): void {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  }
  stopPropagationAuthorsClick(event: MouseEvent): void {
    event.stopPropagation()
  }
}