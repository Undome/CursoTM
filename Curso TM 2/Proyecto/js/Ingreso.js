let contadorIngresos = 0;
class Ingreso extends Dato {

    constructor (descripcion,valor){
        super(descripcion,valor);
        this._id = this.contadorIngresos++;    
    }
   
    get id() {
        return this._id;
    }

}
