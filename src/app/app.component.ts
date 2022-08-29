import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { LoadingService } from './shared/loading-block/servises/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  isAuth: boolean;
  isLoading: boolean = false;

  constructor(private authService: AuthServiceService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((value: boolean) => {
      this.isAuth = value;
    })


    this.loadingService.getIsLoadingValue().subscribe((value: boolean) => {

      console.log(this.isLoading);

      //   this.isLoading = value;

    })
  }

  ngDoCheck(): void {

  }
}
