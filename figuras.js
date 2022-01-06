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

function perimetroT(lado1, lado2, base) {
    return lado1 + lado2 + base; 
}
console.log("El perimetro del trángulo es: "
 + perimetroT
 + "cm")

function areaT (base, altura){
    return  (base * altura) / 2;
} 
console.log("El área deñ triángulo es: "
+ areaT
 + "cm²")


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
  const primerLado = document.getElementById('primerLado');
  const segundoLado = document.getElementById('segundoLado');
  const base = document.getElementById('base');
  const valorLado1 = Number(primerLado.value);
  const valorLado2 = Number(segundoLado.value);
  const valorBase = Number(base.value);

  const perimetro = perimetroT(valorLado1, valorLado2, valorBase);
  alert('El perimetro es: ' + perimetro + 'cm');

 }

 function calcularAreaTriangulo() {
    const base = document.getElementById('base');
    const altura = document.getElementById('altura');
    const valorBase = Number(base.value);
    const valorAltura = Number(altura.value);

    const area = areaT(valorBase, valorAltura);
    alert('El área es: ' + area + 'cm')
 }

 // Interaccion triangulo isosceles
 function alturaT (lado1, lado2, base){
     
         return Math.sqrt(lado1**2 - ((base**2)/4));
     }
        
 

 function calcularAlturaTriangulo (){
     const lado1 = document.getElementById('primerLado');
     const lado2 = document.getElementById('segundoLado');
     const base = document.getElementById('base');

     const valorLado1 = Number(lado1.value);
     const valorLado2 = Number(lado2.value);
     const valorBase = Number(base.value);
      if (valorLado1 != valorLado2 || valorBase != valorLado2) {
         alert('Tenes que calcular la alutra de un tríangulo isósceles')

     } else {
     const altura = alturaT(valorLado1, valorLado2, valorBase);
    alert('La altura es de:' + altura + 'cm');
  }
 }
 
// function calcularAlturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
//  if (trianguloGrandeLadoA != trianguloGrandeLadoB)
//{  console.error("Los lados deben ser iguales")
//}else {
//   const trianguloPequenoLadoB = trianguloGrandoLadoBase / 2;
 //  const trianguloPequenoLadoBase = trianguloGrandeLadoA;

//   const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
//   const trianguloPequenoLadoBaseCaudrado = trianguloPequenoLadoBaseCaudrado *  trianguloPequenoLadoBaseCaudrado  ;
//   const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);


//   const trianguloGrandeAltura = trianguloPequenoLadoA;
//   return trianguloGrandeAltura;
//}

 //}

 // Interacción circulo 

 function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroC(value);
    alert(perimetro)
 }

 function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaC(value);
    alert(area);
 }





