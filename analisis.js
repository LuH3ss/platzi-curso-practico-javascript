const salariosArg = argentina.map(

    function(persona) 
    {
return persona.salary;
    }
);
// con este primer array mapeamos ell array argentina y hacemos q retorne otro con los valores de "salary" en cada elemento
const salariosArgSorted = salariosArg.sort(
  function(salarioA, salarioB) {
     return salarioA - salarioB;
  }
  // con esta constante, sorteamos a salariosArg para que se ordenen de menor a mayor 
  // los salario antes despejados.
);


function esPar(numero) {
     return (numero % 2 === 0);
}

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

function medianaSAlarios(lista) { 
    const mitad = parseInt(lista.length / 2 ); // con parseInt se quitan los decimales, tras dividir por 2.

    if (esPar(lista.length)) {
        const personaMitad1 =  lista[mitad - 1];// se necesita  al elemento anterior a la mitad en si. Y asi, calcular el promedio entre estos dos.
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]); // aca se calcula el promedio entre los elementos ingresados, que previamente, fueron despejado. Primero se dividio la lista en 2, si fue impar, se redondea y se toma en cuenta la persona  a la mitad. Pero si es par, se toma en cuenta la persona de la mitad y si persona anterior y se saca un promedio de ambas. 

        return mediana;

        

    } else {
        const personaMitad = lista[mitad]; // si la lista es impar, la posisicion retorna(la de la mitad):
        return personaMitad;
    }
} 

const medianaGeneralArg = medianaSAlarios(salariosArgSorted);


//Mediana del top 10%

const spliceStart = (salariosArgSorted.length * (100 - 10) / 100); // el valor del largo de la lista, en este caso, se va a seprar despde el procentaje, desde el 90% porque se busca calcular el promedio dentro del 10% del total del Array original y ordenado.

const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgtop10 = salariosArgSorted.splice(
spliceStart,
spliceCount,
); // se ingresan, dois parametros/argumento: la posicion donde se corta y la cantidad de items a cortar.

const medianaTop10arg = medianaSAlarios(salariosArgtop10); // aca se calcula el promedio del 10% (del 100% de la lista ordenada)
console.log(
    medianaGeneralArg,
    medianaTop10arg,
);
