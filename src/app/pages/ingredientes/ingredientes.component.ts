import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServiceService } from '../../core/services/service.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Ingredientes } from '../../interfaces/ingredientes-list';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { AsyncPipe } from '@angular/common';
import { IngredienteComponent } from '../../components/ingrediente/ingrediente.component';

@Component({
  selector: 'app-ingredientes',
  standalone: true,
  imports: [HeaderComponent,ErrorMessageComponent, AsyncPipe, IngredienteComponent],
  templateUrl: './ingredientes.component.html',
  styleUrl: './ingredientes.component.css'
})
export class IngredientesComponent implements OnInit {

  ingredientesList$!: Observable<Ingredientes>;
  public error!: string;

  constructor(private service: ServiceService) { }


  ngOnInit(): void {
    this.ingredientesList$ = this.service.getListIngredientes().pipe(catchError((error: string) => {
      this.error = error;
      return EMPTY;
    }))
    
  }
}
