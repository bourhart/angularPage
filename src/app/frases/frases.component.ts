import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent
{
  frases = ["Tu puedes ser lo que quieras ser!", "Fallar una vez no significa que seas un inutil"];  
}
