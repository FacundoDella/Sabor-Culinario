import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../core/services/service.service';
import { Observable, catchError, EMPTY } from 'rxjs';
import { mealTotalArray } from '../../interfaces/mealTotal';
import { MealInfoComponent } from '../../components/meal-info/meal-info.component';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
@Component({
  selector: 'app-meal-info-results',
  standalone: true,
  imports: [MealInfoComponent, AsyncPipe, HeaderComponent],
  templateUrl: './meal-info-results.component.html',
  styleUrl: './meal-info-results.component.css'
})
export class MealInfoResultsComponent implements OnInit {
  mealItemTotal$!: Observable<mealTotalArray>;
  public errorMessage!: string;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.mealItemTotal$ = this.service.getComidaId().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }

}
