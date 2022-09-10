<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { LoadingService } from './shared/loading-block/servises/loading.service';

=======
import { Component, DoCheck } from '@angular/core';
import { AuthServiceService } from './authentication/services/auth-service.service';
>>>>>>> main

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  test: boolean;

  isAuth$: Observable<boolean>;
  isLoading$: Observable<boolean>;

<<<<<<< HEAD
  constructor(private authService: AuthServiceService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.isLoading$ = this.loadingService.getIsLoadingValue()
    this.isAuth$ = this.authService.isAuthenticated();
=======
  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated();
>>>>>>> main
  }
}
