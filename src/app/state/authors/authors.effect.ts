import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { IAuthors } from "src/app/interfaces/authors.interface";
import { AuthorsService } from "src/app/modules/add-course-page/services/authors.service";
import { getAuthorsAction, getAuthorsFailedAction, getAuthorsSuccessAction, getFilteredAuthorsAction, getFilteredAuthorsFailedAction, getFilteredAuthorsSuccessAction } from "./authors.action";

@Injectable()
export class AuthorsEffects {
    constructor(
        private actions$: Actions,
        private authorsService: AuthorsService
    ) { }

    getAllAuthorsList$ = createEffect(() => this.actions$.pipe(
        ofType(getAuthorsAction),
        switchMap(() => this.authorsService.getFilteredAuthorsList('').pipe(
            map((authors: IAuthors[]) => getAuthorsSuccessAction({ authorsList: authors })),
            catchError(() => of(getAuthorsFailedAction))
        ))
    ))

    getFilteredAuthorsList$ = createEffect(() => this.actions$.pipe(
        ofType(getFilteredAuthorsAction),
        switchMap(({ inputData }) => this.authorsService.getFilteredAuthorsList(inputData).pipe(
            map((authors: IAuthors[]) => getFilteredAuthorsSuccessAction({ authorsList: authors })),
            catchError(() => of(getFilteredAuthorsFailedAction))
        ))
    ))



}