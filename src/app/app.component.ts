import { Component, DoCheck } from '@angular/core';
import { AuthServiceService } from './authentication/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements DoCheck {

  isAuth: boolean;
  isLoading: boolean = true;

  constructor(private authService: AuthServiceService) { }

  ngOnInit (): void{
    setTimeout(()=>this.isLoading = false,1000)
}

  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated();
  }
}
