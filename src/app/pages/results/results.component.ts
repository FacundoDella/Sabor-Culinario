import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServiceService } from '../../core/services/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { MealItem } from '../../interfaces/meal';
import { MealsComponent } from '../../components/meals/meals.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { info } from '../../interfaces/inputInfo';

import { SharedService } from '../../core/services/shared-service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [AsyncPipe, HeaderComponent, MealsComponent, ErrorMessageComponent, NgIf, NgFor, FooterComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {

  public mealItemResults$!: Observable<MealItem>;
  public errorMessage!: string;
  constructor(private service: ServiceService, private sharedService: SharedService) { }
  info = info;

  ngOnInit(): void {


    // Guardado en localStorage
    const storedSearch = localStorage.getItem('inputSearch');
    if (storedSearch) {
      this.sharedService.inputSearch = storedSearch;
      console.log('Valor recuperado desde el LocalStorage', this.sharedService.inputSearch);
      if (this.sharedService.inputSearch.length < 2) {
        console.log('Realizando llamada con inputSearch < 2');
        this.mealItemResults$ = this.service.getComidaLetra().pipe(catchError((error: string) => {
          this.errorMessage = error;
          return EMPTY;
        }));
      } else {
        console.log('Realizando llamada con inputSearch >= 2');
        this.mealItemResults$ = this.service.getComidaIngredient().pipe(catchError((error: string) => {
          this.errorMessage = error;
          return EMPTY;
        }));
      }


    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios en SharedService:', changes);
  }
}

