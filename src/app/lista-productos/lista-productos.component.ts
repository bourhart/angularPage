import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  constructor(
    private carritoService: CarritoService
  ) { }

  infoProductos!: Observable<{ nombre: string, precio:number, descripcion: string, identificador: string }[]>;

  ngOnInit(): void {
    this.infoProductos = this.carritoService.getProductData();
    console.log(this.infoProductos);
  }
}
