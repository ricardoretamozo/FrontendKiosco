import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioI } from 'src/app/models/usuario.interface';
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

  private user:UsuarioI; 
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
      (data:ResponseI) =>{
        let dataRes = data;
        this.user = dataRes[1].userFound;
        if (dataRes.message == undefined){
          localStorage.setItem("token",dataRes[0].token);
          localStorage.setItem("user",btoa(this.user.nombre.toString())); //btoa(form['email'])
          localStorage.setItem("mail",btoa(this.user.email.toString()));
          localStorage.setItem("apell",btoa(this.user.apellido.toString()));
          localStorage.setItem("dir",btoa(this.user.direccion.toString()));
          localStorage.setItem("phone",btoa(this.user.telefono.toString()));
          localStorage.setItem("point",btoa(this.user.tienda.toString())); 
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
