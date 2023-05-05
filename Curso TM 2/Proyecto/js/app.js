var presupuesto = 0;
var porcentajeEgreso = 0;
let egresos = [];
let ingresos = [];

const cargarCabecero = () => {
	let presupuesto = totalIngresos() - totalEgresos();
	let porcentajeEgreso = totalEgresos() / totalIngresos();
	document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
	document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
	document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
	document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
	}
const totalIngresos = () => {
	let totalIngresos = 0;
	for (let ingreso of ingresos) {
		totalIngresos += ingreso.valor;
		}
	return totalIngresos;
	}
const totalEgresos = () => {
	let totalEgresos = 0;
	for (let egreso of egresos) {
		totalEgresos += egreso.valor;
	}
	return totalEgresos;
	}

const formatoMoneda = (j) => {
	let cambio = j.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' , minimumFractionDigits: 2});
	return cambio;
}

const formatoPorcentaje = (j) => {
	let cambio = j.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2});
	return cambio;	
}

function cargarApp() {
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
}

const cargarIngresos = () => {
	let ingresosHTML = '';
	for (const ingreso of ingresos) {
	  ingresosHTML += crearIngresoHTML(ingreso);
	  console.log(ingreso._descripcion);
	}
	document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
	const ingresoHTML = 
	`<div class="elemento limpiarEstilos">
		<div class="elemento_descripcion">
			${ingreso._descripcion}
		</div>
		<div class="derecha limpiarEstilos">
			<div class="elemento_valor">
				${formatoMoneda(ingreso._valor)}
			</div>
			<div class="elemento_eliminar">            
				<button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso._id})">
					<ion-icon name="close-circle-outline"></ion-icon>
				</button>
			</div>
		</div>
	</div>`;
		return ingresoHTML;
}

const cargarEgresos = () => {
	let egresosHTML = '';
	for (const egreso of egresos) {
	  egresosHTML += crearEgresoHTML(egreso);
	  console.log(egreso._descripcion);
	}
	document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
	const egresoHTML = 
	`<div class="elemento limpiarEstilos">
		<div class="elemento_descripcion">
			${egreso._descripcion}
		</div>
		<div class="derecha limpiarEstilos">
			<div class="elemento_valor">
				${formatoMoneda(egreso._valor)}
			</div>
			<div class="elemento_porcentaje">
				${formatoPorcentaje(egreso._valor/totalEgresos())}
			</div>
			<div class="elemento_eliminar">
				<button type="button" class="elemento_eliminar--btn" onclick="eliminarEgreso(${egreso._id})">
					<ion-icon name="close-circle-outline"></ion-icon>
				</button>
			</div>
		</div>
	</div>`;
		return egresoHTML;
}

const eliminarIngreso = (id) => {
	let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
        ingresos.splice(indiceEliminar, 1)
        cargarCabecero();
        cargarIngresos()
}

const eliminarEgreso = (id) => {
	let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
        egresos.splice(indiceEliminar, 1)
        cargarCabecero();
        cargarEgresos()
}

const agregarDato = () => {
	let forma = document.getElementById('forma');
	let tipo = document.getElementById('tipo').value;
	console.log(tipo);
	let descripcion = forma.descripcion.value;
	let valor = forma.valor.value;

	if (descripcion !== '' && valor !== '') {
		if (tipo === 'ingreso') {
			ingresos.push(new Ingreso(descripcion, parseInt(valor)));
			cargarCabecero();
			cargarIngresos();
		} else if (tipo === 'egreso') {
			egresos.push(new Egreso(descripcion, parseInt(valor)));
			cargarCabecero();
			cargarEgresos();
		}
	} else { 
		alert("Agrega los datos necesarios en las casillas");
	}
	
	forma.reset();
	return false;
}
