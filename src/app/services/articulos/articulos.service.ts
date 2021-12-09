import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticulosI } from 'src/app/models/articulos.interface';

@Injectable()
export class ArticulosService {

  _url:String = 'http://localhost:4000/'

  constructor(
    private http: HttpClient
  ) { }

  private token = localStorage.getItem('token')

  getArticulos():Observable<ArticulosI[]> {
    let direccion = this._url + "api/articulos"
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
      .set('x-access-token', this.token)

    return this.http.get<ArticulosI[]>(direccion,{
      headers: header
    })
  }
}
