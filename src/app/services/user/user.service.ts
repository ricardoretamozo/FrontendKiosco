import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url:String = 'http://localhost:4000/'

  constructor(
    private http: HttpClient
  ) { }

  private token = localStorage.getItem('token')
  
    getUsuarios() {
      let direccion = this._url + "api/users"
      let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')
        .set('x-access-token', this.token)

      return this.http.get(direccion,{
        headers: header
      })
    }

}
