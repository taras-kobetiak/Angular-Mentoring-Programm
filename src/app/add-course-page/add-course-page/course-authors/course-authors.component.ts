import { Component, forwardRef, OnInit, } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import { debounceTime, Observable, Subject, takeUntil, } from 'rxjs';
import { IAuthors } from 'src/app/interfaces/authors.interface';
import { AuthorsService } from '../../services/authors.service';


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

  onChange: any;
  onTouched: any;
  showAuthorsList: boolean;

  authorsInput: FormControl = new FormControl();
  pickedAuthors: FormArray = new FormArray([
    new FormControl()
  ], Validators.required);

  authorsList$: Observable<IAuthors[]>;
  unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {

    if (this.pickedAuthors.value[0] === null) {
      this.pickedAuthors.removeAt(0);
    }

    this.authorsList$ = this.authorService.getFilteredAuthorsList('');

    this.authorsInput.valueChanges.pipe(
      debounceTime(100),
      takeUntil(this.unsubscribingData$)
    ).subscribe((inputData: string) => {
      this.authorsList$ = this.authorService.getFilteredAuthorsList(inputData);
    });

    this.pickedAuthors.valueChanges.pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe((authors: IAuthors) => {
      if (this.onChange) {
        this.onChange(authors);
      }
    })
  }

  writeValue(authors: IAuthors[]): void {
    authors.forEach((author) => {
      if (author) {
        this.pickedAuthors.push(new FormControl(author));
      }
    })
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
    setTimeout(() => this.showAuthorsList = false, 300)
  }

  onAuthorNameClick(author: IAuthors): void {

    let currentAuthorList: IAuthors[] = this.pickedAuthors.value;

    if (this.pickedAuthors.value[0] === null) {
      this.pickedAuthors.removeAt(0);
      currentAuthorList = this.pickedAuthors.value;
    }

    if (currentAuthorList.find((el: IAuthors) => el.id === author.id)) {
      return;
    }


    this.pickedAuthors.push(new FormControl(author));
    this.showAuthorsList = false;
    this.authorsInput.setValue('');
  }

  onAuthorDeleteClick(author: any): void {

    this.pickedAuthors.value.forEach((pickedAuthor: IAuthors, index: number) => {
      if (pickedAuthor.id === author.id) {
        this.pickedAuthors.removeAt(index);
      }
    });

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