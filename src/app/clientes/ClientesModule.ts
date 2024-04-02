import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitariosModule } from '../utilitarios/UtilitariosModule';

import {RouterModule} from "@angular/router";
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
    
    ],
    declarations: [ClientesComponent],
    
    exports: [ClientesComponent]
})


export class ClientesModule{

}