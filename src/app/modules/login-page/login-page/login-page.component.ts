import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AuthServiceService } from 'src/app/authentication/services/auth-service.service';
import { IUserEntyty } from 'src/app/interfaces/user-entyty.interface';
import { loginAction } from 'src/app/state/authentication/auth.action';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
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


