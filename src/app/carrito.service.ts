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
}
