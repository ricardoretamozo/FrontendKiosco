import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  usuario: string = ""
  private infor:Array<any> = []
  constructor(
    location: Location,
    private element: ElementRef, 
    private router: Router,
    private userS: UserService
    ) {
    this.location = location;
    this.userS.getUsuarios().subscribe((data: any) => {
      this.infor = data
      this.usuario = this.infor.find(usuario => usuario.email === atob(localStorage.getItem('user'))).nombre
    })
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
