function limpiaAnagrama(arr){
    let obj = new Object();

    var ordenado ="";

    for(let i=0; i<arr.length; i++){
        ordenado = arr[i].toLowerCase().split('').sort().join();                    
        obj[ordenado]=arr[i];     
    }
    return Object.values(obj);
}

var arreglo = ["ROMA", "mora", "sopa", "ropa", "psoa", "roma"];
alert(limpiaAnagrama(arreglo));

/////////////////////////

function limpiaAnagramaMap(arr){
    let mapa = new Map();

    var ordenado ="";

    for(let i=0; i<arr.length; i++){
        ordenado = arr[i].toLowerCase().split('').sort().join();                    
        
        mapa.set(ordenado, arr[i]);
        
        // obj[ordenado]=arr[i];     
    }
    return Array.from(mapa.values());
}

var arreglo2 = ["ROMA", "mora", "sopa", "ropa", "psoa", "roma"];
alert(limpiaAnagramaMap(arreglo2));