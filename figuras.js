// Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
//  console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimedtroCuadrado(lado) {
    return lado * 4;
}


// console.log("El perimetro del cuadrado es " + perimedtroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El área del cuadrado es " + areaCuadrado + "cm²");
console.groupEnd();


// Codigo del triangulo
// console.group("Triángulo");
// const ladoT1 = 6;
// const ladoT2 = 6;
// const baseT = 4;


// console.log(
//    "Los lados del triángulo miden "
//    + ladoT1
//    + "cm, "
//    + ladoT2
//    + "cm, "
//     + baseT
//    + "cm"
//);

// const alturaT = 5.5;
// console.log("La altura del triángulo es de: "
// + alturaT
// + "cm");

function perimetroT(ladoT, ladoT2, baseT) {
    return ladot + ladoT2 + baseT
}
// console.log("El perimetro del trángulo es: "
// + perimetroT
// + "cm")

function areaT (baseT, alturaT){
    return  (baseT * alturaT) / 2;
} 
// console.log("El área deñ triángulo es: "
// + areaT
//  + "cm²")
console.groupEnd();
// Código del circulo
console.group("Circulo");

// Radio

// const radioC = 4;
// console.log("El radio del circulo es: "
// + 4
// + "cm");
// Diámetro

function  diametroC(radioC)  {
    return radioC * 2;}
//console.log("El diámetro del circulo es "
//+ diametroC
//+ "cm");
// PI

const PI = Math.PI;
 console.log("PI es: " + PI
 );
// Circunferencia
function perimetroC(radioC) {  
    const diametro = diametroC(radioC);
    return diametro * PI;
    ;}

// console.log("El perimetro del cirulo es: "
// + perimetroC
// + "cm");
// Ärea
function areaC(radioC) {
    return (radioC * radioC)* PI
    ;}
// console.log("El área del circulo es: "
// + areaC
// + "cm²");
 console.groupEnd();

 //  Interaccion con HTML

 function calcularPerimetroCuadrado() {

    // la siguiente const nos permite importar el elemento html a javascript
  const input = document.getElementById("InputCuadrado");
  // esta const de abajo nos aclara que necesitamos el valor que ingrese el usuario
  const value = input.value;

  const perimetro = perimedtroCuadrado(value);
  alert(perimetro);
 }

 function calcularAreaCuadrado() {
     const input = document.getElementById("InputCuadrado");

     const value = input.value;

     const area = areaCuadrado(value);
     alert(area);

 }
// Interacción triangulo
 function calcularPerimetroTriangulo() {

 }

 function calcularAreaTriangulo() {

 }

 // Interacción circulo 

 function calcularPerimetroCirculo() {

 }

 function calcularAreaCirculo() {

 }



