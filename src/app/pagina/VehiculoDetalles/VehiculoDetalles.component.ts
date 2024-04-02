import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { Vehiculo } from '../../utilitarios/modelos/vehiculos';
import { ActivatedRoute } from '@angular/router';
import Swal, {} from 'sweetalert2';

@Component({
  selector: 'app-VehiculoDetalles',
  templateUrl: './VehiculoDetalles.component.html',
  styleUrls: ['./VehiculoDetalles.component.css']
})
export class VehiculoDetallesComponent implements OnInit {

  vehiculo?: Vehiculo
  formulario: FormGroup;
  constructor(
    private vehiculoService : VehiculoService,
    private formBuilder : FormBuilder,
    private  activedRoute : ActivatedRoute
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

    this.formulario.controls['codigo'].disable();   
  }
  ngOnInit() {
    this.activedRoute.params.subscribe((params) =>{
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(data =>{
        if(data.codigo == "1"){
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
        }else{
          Swal.fire({
                
            title: 'Mensaje de Alerta ',
            text: "No se pudo cargar la información",
            icon: "error"
          
         });
          }
        
      });
      
    })
 
  }
  guardar() {
   
    if (this.formulario.valid) {
     this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(
      data => {
        if (data.codigo == "1") {
          Swal.fire({
            title: 'Mensaje ',
            text: "Vehiculo actualizado con éxito",
            icon: "success"
          });
        
        }  else {
          Swal.fire({
            title: 'Mensaje ',
            text: "No se pudo actualizar:" + data.mensaje,
            icon: "error"
          });
        } 
      });}
        else {
          Swal.fire({
            title: 'Mensaje ',
            text: "Faltan llenar campos",
            icon: "error"
          });
        }
      }
     
    
  
}

