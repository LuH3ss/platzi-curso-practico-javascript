const lista1 =
[
1,
2,
3,
1,
2,
3,
4,
2,
2,
2,
1
];
// array q despues convertimos en objeto y dentro sus elementos
const listaCount = {};
// el metodo map recorre los arrays
lista1.map(
  function (elemento) {
      if(lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
            lista1Count [elemento] = 1; 
      }
   
  }

);
// a Object.entries le mandamos un objeto que despues va a ser array. 
const lista1Array = Object.entries(listaCount).sort(
   function (valorAcumulado, nuevoValor) {
       valorAcumulado - nuevoValor
     

   }

);

const lista1Array = Object.entries(lista1Count).sort(

    function(elementoA, elementoB) {

        return elementoA[1] - elementoB[1];
    }
);
const moda = lista1Array[lista1Array.length - 1];