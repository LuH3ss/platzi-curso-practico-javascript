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
]
function priceCupon() {
const inputCupon = document.getElementById('inputCupon');
const valorCupon = inputCupon;

const inputPrice = document.getElementById('inputPrice');
const valorPrecio = inputPrice;



    switch(valorCupon)

{
    case cupones[0]: 
    const descuentoCupon = (valorPrecio * 15) / 100;
     const resultC = document.getElementById('resultC');
    resultC.innerText = 'El precio final de tu compra es de:$' + descuentoCupon;
    break;
    case cupones [1]: 
    const descuentoCupon = (valorPrecio * 30) / 100;
     const resultC = document.getElementById('resultC');
    resultC.innerText = 'El precio final de tu compra es de:$' + descuentoCupon;
    break;
    case cupones [2]:
        const descuentoCupon = (valorPrecio * 25) / 100;
     const resultC = document.getElementById('resultC');
    resultC.innerText = 'El precio final de tu compra es de:$' + descuentoCupon;
    default: 
    const resultC = document.getElementById('resultC');
    resultC.innerText = 'Oops! Este cupon no eixte o no es válido';
}

}

