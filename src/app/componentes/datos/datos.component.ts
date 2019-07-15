import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  informacion: string;
  datos: any = new Object();
  mostrar=false;
  constructor() {
    this.datos.nombre = 'Eymie Hypatia Vera Rodríguez';
    this.datos.email = 'everar16_1@unc.edu.pe';
    this.datos.direccion = 'Av. Perú #1172';
    this.datos.telefono = '+51 976826923';
   }
  
  ngOnInit() {
    
  }

  mostrarOcultar(){
    this.mostrar=!this.mostrar;
  }

}
