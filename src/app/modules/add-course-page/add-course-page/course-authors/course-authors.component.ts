import { Component, forwardRef, OnInit, } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR, Validators, } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { debounceTime, filter, map, Observable, of, Subject, switchMap, takeUntil, } from 'rxjs';
import { IAuthor } from 'src/app/interfaces/authors.interface';
import { getAuthorsAction, getFilteredAuthorsAction } from 'src/app/state/authors/authors.action';
import { AuthorsSelector } from 'src/app/state/authors/authors.selector';

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

  authorsList$: Observable<IAuthor[]>;


  unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(getAuthorsAction());

    this.authorsInput.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.unsubscribingData$),
    ).subscribe((inputData: string) => {
      this.store.dispatch(getFilteredAuthorsAction({ inputData: inputData }))

      // this.pickedAuthors.value.forEach((author: IAuthor) => {
      //   this.authorsList = this.authorsList.filter(el => el.fullName !== author.fullName);


      // })

    });

    this.pickedAuthors.valueChanges.pipe(
      takeUntil(this.unsubscribingData$)
    ).subscribe((authors: IAuthor) => {

      // this.pickedAuthors.value.forEach((author: IAuthor) => {
      //   this.authorsList = this.authorsList.filter(el => el.fullName !== author.fullName)
      // })

      if (this.onChange) {
        this.onChange(authors);
      }
    })



    this.authorsList$ = this.store.pipe(
      select(AuthorsSelector),
      map((authors: IAuthor[]) => authors.filter(
        (author: IAuthor) => !this.pickedAuthors.value.some((item: IAuthor) => item.id === author.id)
      )),
    )

  }

  writeValue(authors: IAuthor[]): void {
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
    setTimeout(() => this.showAuthorsList = false, 1000)
  }

  onAuthorNameClick(author: IAuthor): void {
    let currentAuthorList: IAuthor[] = this.pickedAuthors.value;
    console.log(currentAuthorList);

    if (currentAuthorList.find((el: IAuthor) => el.id === author.id)) {
      return;
    }

    this.pickedAuthors.push(new FormControl(author));

    setTimeout(() => this.showAuthorsList = true, 0);


    this.authorsInput.setValue('');
  }

  onAuthorDeleteClick(author: IAuthor): void {
    this.pickedAuthors.value.forEach((pickedAuthor: IAuthor, index: number) => {
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