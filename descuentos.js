//const precioOriginal = 100;
//const descuento = 15;

//console.log({
//    precioOriginal, 
//    descuento, 
//    porcentajePrecioConDescuento, 
//    precioConDescuento,
//})

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento ) / 100;

return precioConDescuento;
}

function priceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const inputDiscount = document.getElementById('inputDiscount');
    const price = inputPrice.value;
    const discount = Number(inputDiscount.value);

    const priceWithDiscount = calcularPrecioConDescuento(price, discount);

   // alert('El precio final de tu compra es de:' + priceWithDiscount + '$');
   const resultP = document.getElementById('resultP');
    resultP.innerText = 'El precio final de tu compra es de:$' +  priceWithDiscount ;

}

const cupones = [
    "Cliente_Amex",
    "Cleinte_Visa",
    "Cliente_HSBC",
];

const inputCupon = document.getElementById('inputCupon');
const valorCupon = inputCupon.value;
const inputPrice = document.getElementById('inputPrice');
const valorPrecio = inputPrice.value;


function priceCupon() {
const inputCupon = document.getElementById('inputCupon');
const valorCupon = inputCupon.value;

const inputPrice = document.getElementById('inputPrice');
const valorPrecio = inputPrice.value;

let descuento;


switch(valorCupon)

{
    case cupones[0]: 
    descuento = 15;
    break;
    case cupones [1]: 
    descuento = 30;
    break;
    case cupones [2]:
        descuento = 25;
        break;
   
}

   const precioConDescuento = calcularPrecioConDescuento(valorPrecio, descuento);
   const resultC = document.getElementById('resultC');
   resultC.innerText = 'El precio con el cupon ingresado es de:$' + precioConDescuento;

}

