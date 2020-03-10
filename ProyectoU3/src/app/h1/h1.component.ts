/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css']
})
export class H1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */

class H1Component {

}

class Sujeto {
  id: number;
  nombre: String;
  apellido: String;
  genero: String;
  edad: number;
  anoNacimiento: number;

  constructor(id:number, nombre:String, apellido:String, genero: String, edad:number, anoNacimiento:number){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.edad = edad;
    this.anoNacimiento = anoNacimiento;
    console.log("Sujeto creado");
  }

  /**
   * Obtener ID
   */
  public getId() {
    return this.id;
  }

 /**
   * Setear ID
   */
  public setId(id:number) {
    this.id = id;
  }

  /**
   * Obtener nombre
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * Setear nombre
   */
  public setNombre(nombre:String) {
    this.nombre = nombre;
  }

  /**
   * Obtener apellido
   */
  public getApellido() {
    return this.apellido;
  }

  /**
   * Setear apellido
   */
  public setApellido(apellido:String) {
    this.apellido = apellido;
  }
  
  /**
   * Obtener genero
   */
  public getGenero() {
    return this.genero;
  }

 /**
   * Setear Genero
   */
  public setGenero(genero:String) {
    this.genero = genero;
  }

  /**
   * Obtener edad
   */
  public getEdad() {
    return this.edad;
  }

 /**
   * Setear edad
   */
  public setEdad(edad:number) {
    this.edad = edad;
  }

  /**
   * Obtener año de nacimiento
   */
  public getAnoNacimiento() {
    return this.anoNacimiento;
  }

 /**
   * Setear año de nacimiento
   */
  public setAnoNacimiento(anoNacimiento:number) {
    this.anoNacimiento = anoNacimiento;
  }

  
}
window.onload = function (){
  var suj = new Sujeto(0,"Juan","Gomez","M",18,2002);

};
