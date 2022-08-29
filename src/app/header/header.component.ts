import { Component, OnInit } from '@angular/core';
import { IUserEntyty } from '../interfaces/user-entyty.interface';
import { AuthServiceService } from '../authentication/services/auth-service.service';
// import { LoadingService } from '../loading-block/servises/loading.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // isLoading: Observable<boolean>;
  isAuth: boolean;
  currentUser: IUserEntyty;
  subscribe: any;

  constructor(private authService: AuthServiceService,
    // private loadingService: LoadingService
  ) {
  };

  ngOnInit(): void {

    this.authService.isAuthenticated().subscribe(val => {
      this.isAuth = val;
      if (this.isAuth) {

        setTimeout(() => {
          let userData: string | null = localStorage.getItem('currentUser');
          let userDataParse: any = userData ? JSON.parse(userData) : ''
          let user: string = userDataParse;
          this.authService.getUserInfo(user).subscribe((val: IUserEntyty[]) => {
            this.currentUser = val[0];
          })
        }, 0)

      }

    });







    // this.currentUser = this.authService.getUserInfo()


    // ((value: boolean) => {


    //     let userData: string | null = localStorage.getItem('currentUser');
    //     let userDataParse: any = userData ? JSON.parse(userData) : ''
    //     this.currentUser = userDataParse[0];
    //   })
  }

  onLogOutClick(): void {
    this.authService.logOut();
  }
}
