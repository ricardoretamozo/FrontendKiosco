import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticulosI } from 'src/app/models/articulos.interface';
import { ArticulosService } from 'src/app/services/articulos/articulos.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
  providers: [ArticulosService]
})
export class VentasComponent implements OnInit {
  constructor(
    private artS:ArticulosService
  ) {}

  public carrito: Array<ArticulosI> = [];
  public keyword = "nombre";
  public artList: Array<ArticulosI> = [];
  private e:ArticulosI;

  ngOnInit(): void {
    this.artS.getArticulos().subscribe(data => {
      this.artList = data;
    })
  }
  selectEvent(item) {
    this.e = item;
    this.e.cantidad = 0;
    this.carrito.push(this.e);
  }

}
