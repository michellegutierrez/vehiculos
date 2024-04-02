import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/vehiculos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { NumberLiteralType } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor(private http: HttpClient) { }
baseUrl='http://epico.gob.ec/vehiculo/public/api/';

httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

getVehiculos(filtro?:string, rows?:number, page?:number):Observable<Respuesta>{
  let body = new HttpParams();
  body = filtro ? body.set('filtro', filtro):body;
  body = rows? body.set('rows', rows) : body;
  body = page ? body.set('page', page) : body;
  return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params: body})
 
 
  /* return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params: body}).pipe(
    map(respuesta => respuesta.data));*/
   
   

}

insertVehiculo( vehiculo: Vehiculo){
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);  
}

getVehiculo(codigo:string){
  return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+codigo);  
}

actualizarVehiculo(vehiculo:Vehiculo , codigo:string){
  return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo , vehiculo, this.httpOptions);  
}



eliminarVehiculo(codigo:string){
  return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);  
}
/*getVehiculos(filtro:any):Observable<Array<Vehiculo>>{
  const escucha: Observable<Array<Vehiculo>> = new Observable(
    escuchando => { 
     let lista= this.listaDeVehiculos.filter(elem => elem.marca.toLocaleLowerCase( ).includes(filtro))
     escuchando.next(lista);
    });

  return escucha;
}*/

/*getVehiculo(codigo:String): Observable<Vehiculo | undefined> {
 const escucha: Observable <Vehiculo | undefined> = new Observable(
  escuchando => { setTimeout( ()=>{
    let vehiculo = this.listaDeVehiculos.find(element => element.codigo == codigo);  
    escuchando.next(vehiculo); 
  },1000);
   
  });
 
  return escucha;
  
}
*/
addVehiculo(vehiculo: Vehiculo){
  this.listaDeVehiculos.push(vehiculo);
  console.log(vehiculo);
}



private listaDeVehiculos: Array<Vehiculo> =[
  {"codigo": "A001", "marca": "CHEVROLET", "modelo": "CAPTIVA",  "kilometraje":"50000", "precio":25000,"foto":"https://assets.static-gm.com/Assets/83ec4933-56df-41a8-92b1-5366014876c6/4280f758-35ff-4ada-aa28-79950652203a/v-1700261039/Desktop.png", "anio":2021, "calificacion":3},
  {"codigo": "A002", "marca": "KIA", "modelo": "RIO", "kilometraje":"80000", "precio":15000, "foto":"null", "anio":2024, "calificacion":4},
  {"codigo": "A003", "marca": "CHERY", "modelo": "ARRIZO 5", "kilometraje":"30000", "precio":30000,"foto":"null", "anio":2023, "calificacion":3},
  {"codigo": "A004", "marca": "TOYOTA", "modelo": "AGYA", "kilometraje":"75000", "precio":25000, "foto":"null", "anio":2019, "calificacion":4},
  {"codigo": "A005", "marca": "HYUNDAI", "modelo": "AGYA", "kilometraje":"55000", "precio":20000, "foto":"null", "anio":2015, "calificacion":4},

];


}

export interface Respuesta{
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo>|Vehiculo|any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}
