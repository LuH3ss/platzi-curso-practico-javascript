const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmetica(lista)
{
//let sumaLista = 0;

//for(let i = 0; i < lista.length; i++) {
//  sumaLista = sumaLista + lista[i];
//}
// el metodo reduce recibe, como argunmento, las funciones dentro de este mismo(sumar, restar, etx)
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;

    }
);

const promedioLista = sumaLista / lista.length;
return promedioLista;
}