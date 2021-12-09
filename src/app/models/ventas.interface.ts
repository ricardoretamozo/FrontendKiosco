import { ArticulosI } from "./articulos.interface";
export interface VentasI{
    fecha: String;
    hora: String;
    articulos: Array<ArticulosI>;
    precioTotal: Number;
    cajero: String;
    cliente: String;
}