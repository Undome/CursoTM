class Dato {
	
	constructor(descripcion, valor) {
		this._descripcion = descripcion;
		this._valor = valor;
	}
	get descripcion() {
		return this._descripcion;
	}
	set descripción(newDescript) {
		this._descripcion = newDescript;
	}
	get valor() {
		return this._valor;
	}
	set descripción(newVal) {
		this._valor = newVal;
	}
}
