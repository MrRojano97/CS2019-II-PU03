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

/**
 * 
 */
class typeOfRelation{
  id:number;
  name:string;
  color:string;
  typeOfLine: string;
  figure:string;
  constructor (id: number, name: string,color: string,typeOfLine: string, figure: string){
    this.id=id;
    this.name=name;
    this.color=color;
    this.typeOfLine=typeOfLine;
    this.figure=figure;
  }
  /**
   * getId
   */
  public getId() : number {
    return this.id;
  }
  /**
   * getName
   */
  public getName():string {
    return this.name;
  }

  /**
   * setName
   */
  public setName(name:string) {
    this.name=name;
  }
  /**
   * getColor
   */
  public getColor():string {
    return this.color;
  }
  /**
   * setColor
   */
  public setColor(color:string) {
    this.color=color;
  }

  /**
   * getTypeOfLine
   */
  public getTypeOfLine():string {
    return this.typeOfLine;
  }

  /**
   * setTypeOfLine
   */
  public setTypeOfLine(typeOfLine: string) {
    this.typeOfLine=typeOfLine;
  }

 /**
  * getFigure
 */
 public getFigure():string {
   return this.figure;
}
/**
 * setFigure
figure:string */
public setFigure(figure:string) {
  this.figure=figure;
}


}

class relation { 
  id:number;
  idTypeOfRelation:number;
  idGenomaA:number;
  idGenomaB: number;

  /**
   * Constructor of the relations
   * @param id Construc
   * @param idTypeOfRelation 
   * @param idGenomaA 
   * @param idGenomaB 
   */
  constructor (id: number, idTypeOfRelation: number,idGenomaA: number,idGenomaB: number){
      this.id=id;
      this.idTypeOfRelation=idTypeOfRelation;
      this.idGenomaA=idGenomaA;
      this.idGenomaB=idGenomaB;
  }

  /**
   * getId
   */
  public getId() : number {
      return this.id;
  }

  /**
   *setId
  *id: number 
  */
  public setId(id: number) {
      this.id=id;
  }

  /**
   * getIdTypeOfRelations
   */
  public getIdTypeOfRelations() : number {
      return this.idTypeOfRelation;
  }

  /**
   *setIdTypeOfRelations
  *idTypeOfRelations: number 
  */
  public setIdTypeOfRelations(idTypeOfRelation: number) {
      this.idTypeOfRelation=idTypeOfRelation;
  }

  /**
   * getIdGenomaA
   */
  public getIdGenomaA() : number {
      return this.idGenomaA;
  }

  /**
   *setId
  *id: number 
  */
  public setIdGenomaA(idGenomaA: number) {
  this.idGenomaA=idGenomaA;
  }

  /**
   * getIdGenomaB
   */
  public getIdGenomaB() : number {
      return this.idGenomaB;
  }

  /**
   *setId
  *id: number 
  */
  public setIdGenomaB(idGenomaB: number) {
      this.idGenomaB=idGenomaB;
  }
}

class ControllerRelations { 

  list: Array<number> = [];


  /**
   * Constructor of the relations
   */
  constructor (){

  }

}
