//import { getUrlScheme } from "@angular/compiler";
//import { summaryFileName } from '@angular/compiler/src/aot/util';
//import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
//import { Component, OnInit } from '@angular/core';
//@Component({
 // selector: 'app-h04',
  //templateUrl: './h04.component.html',
 // styleUrls: ['./h04.component.css']
//})
//class H04Component  {
  //constructor() { }
  //ngOnInit(): void {
  //}
//}

class H04Component  {
  constructor(){
    //logica
  }

}


//clases
class subject {
    id: number;
    name: String;
    lastName: String;
    gender: String;
    
    constructor(i: number, na: String, lna: String, g: String ){
      this.id = i;
      this.name = na;
      this.lastName = lna;
      this.gender = g;
    }
    
    public seteId(v : number) {
      this.id = v;
    }

    public setName(v : string) {
      this.name = v;
    }

    public setLastName(v : string) {
      this.name = v;
    }

    public setGender(v : string) {
      this.name = v;
    }

    public getId() : number {
      return this.id;
    }

    public getName() : String {
      return this.name;
    }
    public getLastName() : String {
      return this.lastName;
    }
    public getGender() : String {
      return this.gender;
    }

}

class Genoma{
  id: number;
  sub: subject;
  tyOfEn: typeOfEntities;

  constructor(i: number, s: subject, t: typeOfEntities){
    this.id = i;
    this.sub = s;
    this.tyOfEn = t;
  }

  public setId(v : number) {
    this.id = v;
  }

  public setSub(v : subject) {
    this.sub = v;
  }

  public setTyOfEn(v : typeOfEntities) {
    this.tyOfEn = v;
  }

  
  public getId() : number {
    return this.id;
  }

  public getSubG() : subject {
    return this.sub;
  }

  public getTyOfEnG() : typeOfEntities {
    return this.tyOfEn;
  }

}

//El brayan debe hacer esta wea
class typeOfEntities{

  constructor(){

  }


}


