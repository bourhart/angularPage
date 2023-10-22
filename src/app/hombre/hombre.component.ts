import { Component } from '@angular/core';
import { productos } from '../producto';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent {
  productos = [...productos];
}
