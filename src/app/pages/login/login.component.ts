import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginI } from 'src/app/models/login.interface';
import { ResponseI } from 'src/app/models/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm= new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private authS:AuthService,
    private router:Router
  ) {}

  errorStatus:boolean = false;
  errorMsj:any = "";

  ngOnInit() {
    this.chechLocalStorage();
  }

  chechLocalStorage(){
    if (localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  ngOnDestroy() {
  }

  onLogin(form){
    this.authS.loginByEmail(form).subscribe(
      data =>{
        let dataRes = data;
        if (dataRes.message == undefined){
          localStorage.setItem("token",dataRes.token);
          localStorage.setItem("user",btoa(form['email']));
          this.router.navigate(['dashboard']);
        }
      },
      error => {
        this.errorStatus = true;
        this.errorMsj = error.error.message
      }
    )
  }

}
