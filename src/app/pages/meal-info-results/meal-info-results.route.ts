import { Route } from "@angular/router";
import { MealInfoResultsComponent } from "./meal-info-results.component";


export const routes: Route[] = [{
    path: '',
    component: MealInfoResultsComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 