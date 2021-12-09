export interface Tienda {
    id: string;
    nombre: string;
    ubicacion: string;
  }

  export interface ROL {
    id: string;
    name: string;
  }

  export interface PROVEEDOR {
    id: string;
    nombre: string;
    ruc: string;
    direccion: string;
    telefono: string;
    email: string;
    tienda: Tienda;
  }

  export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    nombre: string;
    apellido: string;
    tienda: Tienda;
    rol: ROL;
  }

  
  export interface Articulo {
    id: string;
    nombre: string;
    cantidad: number;
    costoVenta: number;
    costoCompra: number;
    //perecero: Date; 
    descripcion: string;
    proveedorID: string;
    tiendaID: string;
    usuarioID: string;
  }