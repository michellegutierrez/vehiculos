import { Component, OnInit , Input } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { Vehiculo } from '../../utilitarios/modelos/vehiculos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-lista-vehiculos',
  templateUrl: './pagina-lista-vehiculos.component.html',
  styleUrls: ['./pagina-lista-vehiculos.component.css']
})
export class PaginaListaVehiculosComponent implements OnInit {


  mostrarImagen = true;
   /*private _filtro: string = "";*/
   public listaDeVehiculos:Array<Vehiculo> = []; 
   public rows:number = 10;
   public page:number = 1;
   public pages:number = 0;
   public filtro:string= "";


  /* get filtro(){
    return this._filtro
   }

   set filtro(data:string){

    this._filtro = data;
    this.consultaVehiculos();
   }
*/
  @Input() valor:string = '';



  constructor(
    private vehiculoService: VehiculoService,
   
  ){
      
   }
   ngOnInit() {
    this.consultaVehiculos();
   
  }

  consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe(respuesta =>{
      if(respuesta.codigo =="1"){
        this.listaDeVehiculos = respuesta.data;
        this.pages = respuesta.pages;
        this.paginar(respuesta.pages);
      }
    
    })
  }

   cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultaVehiculos();
   }
   listaPaginas: Array<number> = [];

   paginar(pages:number){
    this.listaPaginas=[];
    for(let i =1; i <+pages; i++){
      this.listaPaginas.push(i);
    }


   }
   siguiente(){

  if(this.page < this.pages){
    this.page ++;
    this.consultaVehiculos();
  }
   }

   atras(){
    if(this.page > 1){
      this.page --;
      this.consultaVehiculos();
    }
   }

    /*this.vehiculoService.getVehiculos(this.filtro).subscribe(data => {
      this.listaDeVehiculos = data;
    });*/
  
  mostrar(){
    this.mostrarImagen = !this.mostrarImagen;
  }
  
 recepcion(dato:number)
{
  console.log("Dato", dato);
}
   
  eliminar(codigo:string)
  {
    Swal.fire({
      title: "Estas seguro de que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: `No`,
      icon: 'question'

    }).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data =>{
            if(data.codigo == "1"){
              this.consultaVehiculos();
                Swal.fire({
                
                  title: 'Mensaje ',
                  text: " Vehiculo eliminado con exito" ,
                  icon: "success"
                
      
              })
            }else{
              Swal.fire({
                
                title: 'Mensaje ',
                text: " No se pudo eliminar el registro:" + data.mensaje ,
                icon: "error"
              
    
            })
            }
        });
      }
    });

  }
}

