import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagina/Home/Home.component';
import { PaginaListaVehiculosComponent } from './pagina/pagina-lista-vehiculos/pagina-lista-vehiculos.component';
import { PagNotFoundComponent } from './pagina/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './pagina/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './pagina/PagVehiculoRegistro/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { VehiculoDetallesComponent } from './pagina/VehiculoDetalles/VehiculoDetalles.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';

const routes: Routes = [

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: PaginaListaVehiculosComponent, 
    pathMatch: "full"

  },
  {
    path: "vehiculo",
    component: PagVehiculoRegistroComponent
  },
  {
    path: "vehiculo/:codigo",
    component: PagVehiculoComponent
  },

  {
    path: "vehiculo-edicion/:codigo",
    component: VehiculoDetallesComponent
  },

  {
    path: "registrarse",
    component: ClientesComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagNotFoundComponent,
    pathMatch: "full"
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 