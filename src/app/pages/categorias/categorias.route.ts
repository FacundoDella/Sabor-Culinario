import { Route } from "@angular/router";
import { CategoriasComponent } from "./categorias.component";


export const routes: Route[] = [{
    path: '',
    component: CategoriasComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 