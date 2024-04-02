import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../../utilitarios/modelos/vehiculos';
import { VehiculoService } from '../../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import Swal, {} from 'sweetalert2';
import { validadorCodigo } from '../../../validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {


   vehiculo?: Vehiculo
   formulario: FormGroup;
  constructor(
    private vehiculoService : VehiculoService,
    private formBuilder : FormBuilder,
  
  ) {
    
   this.formulario = this.formBuilder.group({
    "codigo": ['',[ Validators.required, validadorCodigo()]],
    'marca': ['',[ Validators.required]],
    'modelo': ['',[ Validators.required]],
    'kilometraje': ['',[ Validators.required]],
    'precio': ['',[ Validators.required]],
    'anio':['',[ Validators.required]],
    'calificacion':['',[ Validators.required]]
   });
  }
  ngOnInit() {
   
  }
  
  guardar(){
   
    if(this.formulario.valid){
     this.vehiculoService.insertVehiculo({...this.formulario.value}).subscribe(
      respuesta =>{
        if(respuesta.codigo == "1"){
          Swal.fire({
            title: 'Mensaje ',
            text: "Vehiculo registrado con exito",
            icon: "success"

        }).then(res =>{
          this.formulario.reset();
      
        });

        }  else{
          Swal.fire({
                
                  title: 'Mensaje ',
                  text: "No se registro el vehichulo"+respuesta.mensaje ,
                  icon: "error"
                
          });
      }
    }
     );
    }
  
    else{
      Swal.fire({
            
              title: 'Mensaje ',
              text: "Faltan llenar Campos",
              icon: "error"
            
      });
   
   }
  }
}



