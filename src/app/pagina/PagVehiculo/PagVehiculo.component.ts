import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vehiculo} from '../../utilitarios/modelos/vehiculos';
import {VehiculoService} from '../../servicios/Vehiculo.service';
import { Respuesta } from '../../servicios/Vehiculo.service';
@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo?:Vehiculo ={
    codigo: "",
    marca: "",
    modelo: ""
  };
  
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService
  ) { }

  /*
    ngOnInit() {
    this.route.params.subscribe(params =>{
       this.vehiculoService.getVehiculo(params['codigo']).subscribe( data =>{
        this.vehiculo = data;
       });
    });
  }
imprimir(data:any ){
  console.log('')
}
  
  
  */
  ngOnInit() {
    this.route.params.subscribe(params =>{
       this.vehiculoService.getVehiculo(params['codigo']).subscribe( (respuesta: Respuesta) =>{
        if (respuesta.data instanceof Array) {
         
          this.vehiculo = respuesta.data[0];
        } else {
        
          this.vehiculo = respuesta.data;
        }
       });
    });
  }
  
imprimir(data:any ){
  console.log('')
}
}
