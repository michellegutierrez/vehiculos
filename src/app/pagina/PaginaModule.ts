import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaListaVehiculosComponent } from './pagina-lista-vehiculos/pagina-lista-vehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitariosModule } from '../utilitarios/UtilitariosModule';
import {PagVehiculoComponent} from './PagVehiculo/PagVehiculo.component';
import {RouterModule} from "@angular/router";
import { PagVehiculoRegistroComponent } from './PagVehiculoRegistro/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { VehiculoDetallesComponent } from './VehiculoDetalles/VehiculoDetalles.component';


@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
    
    ],
    declarations: [PaginaListaVehiculosComponent,
        PagVehiculoComponent, PagVehiculoRegistroComponent , VehiculoDetallesComponent],
    
    exports: [PaginaListaVehiculosComponent,
        PagVehiculoComponent, PagVehiculoRegistroComponent, VehiculoDetallesComponent]
})


export class PaginaModule{

}