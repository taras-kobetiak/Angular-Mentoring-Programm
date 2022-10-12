import { Component, forwardRef, OnInit, } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Observable, } from 'rxjs';
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
  pickedAuthors: FormArray = new FormArray([], Validators.required);



  authorsList$: Observable<IAuthors[]>;


  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
    console.log(this.pickedAuthors);


    this.authorsList$ = this.authorService.getAuthorsList()


    this.authorsInput.valueChanges.subscribe(authors => {
      if (this.onChange) {
        this.onChange(authors);
      }
    });
  }

  // this.courseForm.get('authors')?.valueChanges.pipe(
  //   debounceTime(300),
  //   switchMap((inputData: string) => this.authorsService.getFilteredAuthorsList(inputData)),
  //   takeUntil(this.unsubscribingData$)
  // ).subscribe((authorsList: any) => {
  //   this.authorsFilteredList = authorsList;
  // })




  writeValue(obj: string): void {
    this.authorsInput.setValue(obj);
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
    // this.showAuthorsList = false;
  }

  onAuthorNameClick(author: IAuthors): void {

    this.pickedAuthors.push(new FormControl(author));



    this.showAuthorsList = false;
    this.authorsInput.setValue('');
  }

  onAuthorDeleteClick(): void {


    // this.authorDeleteClick.emit(authorName);
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