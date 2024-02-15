import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from '../../interfaces/ingredientes-list';
import { info } from '../../interfaces/inputInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingrediente',
  standalone: true,
  imports: [],
  templateUrl: './ingrediente.component.html',
  styleUrl: './ingrediente.component.css'
})
export class IngredienteComponent {
  @Input() ingrediente!: Ingrediente;

  constructor(private router: Router) { }

  info = info;

  goToResults() {
    info.inputSearch = this.ingrediente.strIngredient;
    this.router.navigate(['/results']);
   
  }
}
