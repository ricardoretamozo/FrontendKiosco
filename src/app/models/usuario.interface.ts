import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { StringDecoder } from "string_decoder";

export interface UsuarioI{
    apellido: String;
    createdAt: String;
    direccion: String;
    email: String;
    nombre: String;
    password: StringDecoder;
    rol: StringMap;
    telefono: String;
    tienda: StringMap;
    udatedAt: String;
    username: String;
    _id: String;
}