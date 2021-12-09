import { Component, OnInit } from '@angular/core';
import { ArticulosI } from 'src/app/models/articulos.interface';

//import { Articulo } from '../../models/articulo.model';

//import { StoreService } from '../../services/store.service';
import { ArticulosService  } from '../../services/articulos/articulos.service';

@Component({
  selector: 'app-products',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ProductsComponent implements OnInit {

  //myShoppingCart: Articulo[] = [];
  total = 0;
  articulos: Array<ArticulosI> = [];

  constructor(
    //private storeService: StoreService,
    private articulosService: ArticulosService
  ) {
    //this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.articulosService.getArticulos().subscribe(data => {
      this.articulos = data; 
    });
  }
/*
  onAddToShoppingCart(product: Articulo) {
    //this.storeService.addProduct(product);
    //this.total = this.storeService.getTotal();
  }
*/
}