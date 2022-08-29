import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { LoadingService } from './loading-block/servises/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements DoCheck {

  isAuth: boolean;
  isLoading: boolean = false;

  constructor(private authService: AuthServiceService, private loadingService: LoadingService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {



    // this.loadingService.getIsLoadingValue().subscribe((value: boolean) => {

    //   console.log(this.isLoading);

    //   this.isLoading = value;

    // })
  }

  ngDoCheck(): void {
    this.authService.isAuthenticated().subscribe((value: boolean) => {
      this.isAuth = value;
    })
  }
}
