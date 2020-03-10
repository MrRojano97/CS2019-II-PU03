import { Component} from '@angular/core';

@Component({
    selector: 'relation-component',
})

/**
 * this class allows the creation of relationships between genomes "two genomes only" 
 * Note: if you need create one relations father and son and mother and son, you need create two relations, but if the relation is gemelos, you not need two relations
 *       Rememer the father may have a son but he can marrierd other female or male. that woman would not be the mother
 */
export class RelationComponent { 
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
