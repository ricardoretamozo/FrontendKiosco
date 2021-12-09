import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticulosI } from 'src/app/models/articulos.interface';

import { Articulo } from '../../models/articulo.model';

@Component({
  selector: 'app-product',
  templateUrl: './articulo.component.html', 
  styleUrls: ['./articulo.component.scss'] 
})
export class ProductComponent {


  @Input() articulo: ArticulosI = {  
    _id: '',
    nombre: '',
    cantidad:0,
    costoVenta: 0,
    costoCompra: 0,
    descripcion: '',
    //perecero: ,
   // tiendaID: '',
    usuario: ''
    //proveedorID: ''
  };
  @Output() addedProduct = new EventEmitter<ArticulosI>();

  constructor() { }

  onAddToCart() {
    //this.addedProduct.emit(this.product);
  }

}