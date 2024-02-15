// En el servicio
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public inputSearch: string = '';

  constructor() {
    console.log('SharedService creado');
  }
}