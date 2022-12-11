import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Subject, takeUntil, } from 'rxjs';
import { AuthServiceService } from 'src/app/authentication/services/auth-service.service';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';
import { loginAction, isAuthLoginPageTrue } from 'src/app/state/authentication/auth.action';
import { isLoadingLoginTrue, isLoadingLoginFalse, isLoadingLoginErrorFalse } from 'src/app/state/loading/isLoading.action';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.store.dispatch(isLoadingLoginTrue());

    const currentUser: IUserEntyty = this.loginForm.value;
    this.createUsersData(currentUser);
  }

  createUsersData(currentUser: IUserEntyty): void {
    this.store.dispatch(loginAction({ currentUser: currentUser }))
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }

}


