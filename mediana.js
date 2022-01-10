const lista = [
100,
200,
500,
400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

let variable;

function calcularMediaAritmetica(lista)
{
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;

    }
);

const promedioLista = sumaLista / lista.length;
return promedioLista;
}


function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if(esPar(lista1.length)) {
    // necesitamos dos elementos
    // -> elr promedio
    // -> mediana
    const elemento1 = lista[mitadLista1 - 1];
    const elemento2 = lista[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
} else {
    // posicion mitadLista1 dentro de lista1
    // -> mediana
    mediana = lista1[mitadLista1];
     
}


function caclularMediana(lista){

    let listaOrdenada = lista.sort(function(a, b){
        return a - b;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);
        
    function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
    }

    if(esPar(lista.length)) {
    // necesitamos dos elementos
    // -> elr promedio
    // -> mediana
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
} else {
    // posicion mitadLista1 dentro de lista1
    // -> mediana
    mediana = lista1[mitadLista1];
     
}
    
}



