import { Route } from "@angular/router";
import { ResultsComponent } from "./results.component";


export const routes: Route[] = [{
    path: '',
    component: ResultsComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 