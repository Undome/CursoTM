function quitarDuplicado(arr) {
    if(typeof arr == (typeof undefined)) {
        console.log("No ingresaste un arreglo");
        return 0;
    }
    if(!(arr instanceof Array)) {
        console.log("El valor que ingresaste no es un arreglo");
        return 0;
    }
    if(arr.length == 0) {
        console.log("El arreglo esta vacio");
        return 0;
    }
    if(arr.length == 1) {
        console.log("El arreglo al menos debe de tener 2 elementos");
        return 0;
    }

    var result = arr.filter((valor, indice)=> {
        return arr.indexof(valor) === indice;
    })
    return result;
}

