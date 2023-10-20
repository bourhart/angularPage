import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: Producto[] = [];
  constructor(
    private http: HttpClient
  ) { }

  addCarrito(producto: Producto) {
    this.items.push(producto);
  }

  clearCarrito() {
    this.items = [];
    return this.items;
  }

  getItemsCarrito() {
    return this.items;
  }

  getProductData() {
    return this.http.get<{nombre:string, precio:number, descripcion:string, identificador: string}[]>('/assets/perfumes.json');
  }
}
