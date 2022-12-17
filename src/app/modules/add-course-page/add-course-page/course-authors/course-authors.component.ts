import { Component, forwardRef, OnInit, } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Observable, Subject, switchMap, takeUntil, } from 'rxjs';
import { IAuthors } from 'src/app/interfaces/authors.interface';
import { getAuthorsAction, getFilteredAuthorsAction } from 'src/app/state/authors/authors.action';
import { AuthorsSelector } from 'src/app/state/authors/authors.selector';
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
  pickedAuthors: FormArray<any> = new FormArray<any>([], Validators.required);

  authorsList$: Observable<IAuthors[]> = this.store.select(AuthorsSelector)


  unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(getAuthorsAction())

    this.authorsInput.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.unsubscribingData$),

    ).subscribe((inputData: string) => {

      this.store.dispatch(getFilteredAuthorsAction({ inputData: inputData }))

      // this.pickedAuthors.value.forEach((author: IAuthors) => {
      //   this.authorsList = this.authorsList.filter(el => el.fullName !== author.fullName);
      // })
    });

    this.pickedAuthors.valueChanges.pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe((authors: IAuthors) => {
      // this.pickedAuthors.value.forEach((author: IAuthors) => {
      //   this.authorsList = this.authorsList.filter(el => el.fullName !== author.fullName)
      // })

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
}