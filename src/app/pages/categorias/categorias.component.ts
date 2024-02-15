import { Component, OnInit } from '@angular/core';
import { CategoriaComponent } from '../../components/categoria/categoria.component';
import { info } from '../../interfaces/inputInfo';
import { ServiceService } from '../../core/services/service.service';
import { EMPTY, Observable, catchError, pipe } from 'rxjs';
import { CategoriaList } from '../../interfaces/categoria';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CategoriaComponent, AsyncPipe, HeaderComponent, NgIf, ErrorMessageComponent, NgFor],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  info = info;
  // public categoriaList$!: Observable<CategoriaList>;
  public errorMessage!: string;

  categoriaList: any;

  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    // this.categoriaList$ = this.service.getCategoriaInfo().pipe(catchError((error: string) => {
    //   this.errorMessage = error;
    //   return EMPTY;
    // }))

    this.service.getCategoriaList().subscribe((data)=>{
      this.categoriaList = data;
      console.log(this.categoriaList);
      console.log(info.categoriaName);
      
    })
  }
}
