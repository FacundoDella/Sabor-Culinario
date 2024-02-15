import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MealItem } from '../../interfaces/meal';
import { info } from '../../interfaces/inputInfo';
import { environment } from '../../../environments/environment.development';
import { mealTotalArray } from '../../interfaces/mealTotal';
import { MealCategoriaList } from '../../interfaces/categorias-list';
import { CategoriaList } from '../../interfaces/categoria';
import { Ingredientes } from '../../interfaces/ingredientes-list';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, ) { }
  info = info;
  errorMessage!:string;

  private categoriaListUrl = "../../../assets/categoriasSV.json";

  getComidaLetra(): Observable<MealItem> {
    console.log('Realizando llamada a getComidaLetra()');
    return this.http.get<MealItem>(`${environment.apiUrlBase}search.php?f=` + info.inputSearch);
  }

  getComidaIngredient(): Observable<MealItem> {
    console.log('Realizando llamada a getComidaIngredient()');
    return this.http.get<MealItem>(`${environment.apiUrlBase}filter.php?i=` + info.inputSearch);
  }

  getComidaId(): Observable<mealTotalArray> {
    return this.http.get<mealTotalArray>(`${environment.apiUrlBase}lookup.php?i=` + info.mealId);
  }

  getComidaRandom(): Observable<MealItem> {
    return this.http.get<MealItem>(`${environment.apiUrlBase}random.php`);
  }

  getListCategorias(): Observable<MealCategoriaList> {
    return this.http.get<MealCategoriaList>(`${environment.apiUrlBase}list.php?c=list`);
  }
  getListIngredientes(): Observable<Ingredientes> {
    return this.http.get<Ingredientes>(`${environment.apiUrlBase}list.php?i=list?`);
  }

  // getCategoriaInfo(): Observable<CategoriaList> {
  //   return this.http.get<CategoriaList>(`${environment.apiUrlBase}categories.php`);
  // }

  getCategoriaList(): Observable<any> {
    return this.http.get(this.categoriaListUrl);
  }
}
