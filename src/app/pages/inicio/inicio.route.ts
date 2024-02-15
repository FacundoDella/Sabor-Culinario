import { Route } from "@angular/router";
import { InicioComponent } from "./inicio.component";


export const routes: Route[] = [{
    path: '',
    component: InicioComponent // Cuando se solicite esta ruta, se llama al component que importa esta ruta, en vez de cargar el componente directamente
}] 