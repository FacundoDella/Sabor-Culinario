import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { ServiceService } from '../../core/services/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { MealItem } from '../../interfaces/meal';
import { AsyncPipe } from '@angular/common';
import { MealsRandomComponent } from '../../components/meals-random/meals-random.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, BuscadorComponent, AsyncPipe, MealsRandomComponent, ErrorMessageComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  public mealItemResults$!: Observable<MealItem>;
  public mealItemResults2$!: Observable<MealItem>;
  public mealItemResults3$!: Observable<MealItem>;
  public errorMessage!: string;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.mealItemResults$ = this.service.getComidaRandom().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))

    this.mealItemResults2$ = this.service.getComidaRandom().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))

    this.mealItemResults3$ = this.service.getComidaRandom().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }

}
