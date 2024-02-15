import { Route } from "@angular/router";
import { IngredientesComponent } from "./ingredientes.component";


export const routes: Route[] = [{
    path: '',
    component: IngredientesComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 