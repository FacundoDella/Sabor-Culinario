import { Component } from '@angular/core';
import { info } from '../../interfaces/inputInfo';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../core/services/service.service';
import { Router } from '@angular/router';
import { SharedService } from '../../core/services/shared-service';
@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  info = info;

  constructor(private service: ServiceService, private router: Router, private sharedService: SharedService) { }

  buscarLetra() {
    this.sharedService.inputSearch = this.info.inputSearch;
    console.log('Valor guardado en SharedService:', this.sharedService.inputSearch);

    // Guardar en localStorage
    localStorage.setItem('inputSearch', this.info.inputSearch);
    this.router.navigate(['/results']);
  }
}
