function consultarClima() {	//Creamos una función para llamar la API cuando buscamos el clima en una sola ciudad
	const ciudad = document.getElementById('ciudad').value;	//Obtenemos del html la ciudad de la que vamos a obtener la info
	const API_KEY = '7988e38cdeafad1d912e3c3ab218ad65'; // Colocamos la API key para acceder a la API
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;	//Este es el url para llamar la API
	fetch(url) //Llamamos a la url
      .then(response => { //Llamamos la respuesta una vez recibida y la evaluamos
        if (response.ok) {  // Si la respuesta es positiva, devolvemos la respuesta
          console.log(response);
          return response.json();
        } else {  //Devolvemos la respuesta de un error
          throw new Error('Error en la respuesta de la API');
        }
      })
      .then(data => { // Si la resapuesta es ok, mostrar resultado en la tabla
        const tabla = document.getElementById('tabla-clima').getElementsByTagName('tbody')[0];  //Llamamos el elemento por id de la tabla del clima y de esta tabla
        const fila = tabla.insertRow();	//Se declara la constante fila, la cual inserta una fila en la tabla
        fila.insertCell().innerHTML = data.name;	//Se carga a la tabla el nombre de la ciudad
        fila.insertCell().innerHTML = `${(data.main.temp - 273.15).toFixed(1)}°C`;	//Se carga temperatura a la tabla y se realiza la equivalencia de F° a C°
        fila.insertCell().innerHTML = data.weather[0].description;	//Se carga la descripción del clima
		fila.insertCell().innerHTML = data.weather[0].icon;	// Sección en desarrollo
      })
      .catch(error => {	//En esta pare cachamos cualquier error que nos devuelva el llamado de la API
        console.error('Error al consultar el clima', error);
      });
  }

function consultarClimas() {	//Creamos una función para llamar la API cuando buscamos el clima en una sola ciudad
	const ciudades = document.getElementById('ciudades').value.split(',').map(ciudad => ciudad.trim());	//Obtenemos del html las ciudades de las que vamos a obtener la info
	const API_KEY = '7988e38cdeafad1d912e3c3ab218ad65'; // Colocamos la API key para acceder a la API
	Promise.all(ciudades.map(ciudad => {	//Se hace una promesa, para esperar por todos los datos
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;	//Este es el url para llamar la API
      return fetch(url).then(response => {	//Indicamos que se regrese la información del fetch
        if (response.ok) {	//Hacemos una comparación para revisar si la respuesta es positiva o negativa, si la respuesta es positiva devolvemos el resultado
          return response.json();
        } else {	//De lo contrario devolvemos un error
          throw new Error('Error en la respuesta de la API');
        }
      });
    }))
    .then(data => {	// Si la resapuesta es ok, mostrar resultado en la tabla
      // Mostrar resultados en la tabla
      const tabla = document.getElementById('tabla-clima').getElementsByTagName('tbody')[0];	//Llamamos el elemento por id de la tabla del clima y de esta tabla
      data.forEach(ciudad => {	//Creamos una función en la que se realizara el mismo proceso para crear el Html de la fila por cada ciudad
        const fila = tabla.insertRow();	//Se declara la constante fila, la cual inserta una fila en la tabla
        fila.insertCell().innerHTML = ciudad.name;	//Se carga a la tabla el nombre de la ciudad
        fila.insertCell().innerHTML = `${(ciudad.main.temp - 273.15).toFixed(1)}°C`;	//Se carga temperatura a la tabla y se realiza la equivalencia de F° a C°
        fila.insertCell().innerHTML = ciudad.weather[0].description;	//Se carga la descripción del clima
      });
    })
    .catch(error => {	//En esta pare cachamos cualquier error que nos devuelva el llamado de la API
      console.error('Error al consultar el clima', error);
    });
 }
function limpiarTabla() {	//Se crea una función para limpiar los resultados en la tabla
        // Mostrar resultado en la tabla
        const tabla = document.getElementById('tabla-clima').getElementsByTagName('tbody');	//Llamamos a la tabla por si id
        for(let i = 0; i<tabla.length; i++)	//Recorremos los elementos de la tabla para limpiarlos uno por uno
        {
            tabla[i].innerHTML = "";
        }
  }
