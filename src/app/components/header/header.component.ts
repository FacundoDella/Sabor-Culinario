import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../core/services/service.service';
import { MealCategoriaList } from '../../interfaces/categorias-list';
import { EMPTY, Observable, catchError } from 'rxjs';
import { info } from '../../interfaces/inputInfo';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mostrarCategoriasList$!: Observable<MealCategoriaList>;
  info = info;

  public errorMessage!: string;

  constructor(private service: ServiceService, private router: Router) { }

  vaciarInput() {
    info.inputSearch = '';
  }

  mostrar: boolean = false;
  mostrarCategorias() {
    this.mostrar = !this.mostrar;
    this.mostrarCategoriasList$ = this.service.getListCategorias().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }

  ocultarCategorias() {
    this.mostrar = false;
  }

  goToItem(item: string) {
    info.categoriaName = item;
    this.router.navigate(['categoria']);
    this.mostrar = false;
  }
}
