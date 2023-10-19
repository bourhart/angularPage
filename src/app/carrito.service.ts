import { Injectable } from '@angular/core';

import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items: Producto[] = [];
  constructor() { }

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
    returh this.http.get<{nombre:string, precio:number, descripcion:string}[]>('/assets/perfumes.json');
  }
}
