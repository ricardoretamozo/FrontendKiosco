import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from 'src/app/models/login.interface';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url:String = 'http://localhost:4000/'

  constructor(
    private http: HttpClient
  ) { }

   loginByEmail(user: LoginI): Observable<ResponseI> {
     let direccion = this._url + "api/auth/signin?"
     let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

     return this.http.post<ResponseI>(direccion, user)
   }
}
