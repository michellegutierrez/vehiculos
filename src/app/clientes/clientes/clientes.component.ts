import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

 cliente = {nombre: "", password: "", telefono: "", email: ""};
 quiereContacto: boolean = false;
 
  constructor(private router: Router) { }


  ngOnInit() {
  }
  goInicio(): void{
    this.router.navigate(["/home"])

  }

  registrar(): void {
    alert("En Construccion")
    this.router.navigate(["/vehiculos"])
  }
}
