import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  constructor(
    private authService:AuthService
  ) {
    /* this.authService.inicioSesion().subscribe(resp => {
      console.log(resp)
    }) */
  }

}
