/* let continuarComprando = prompt("Desea comprar si o no");
while(continuarComprando == "si"){
    let marcaProducto = prompt("Ingrese el marca del producto");
    let modeloProducto = prompt("Ingrese el modelo del producto");
    if (marcaProducto == "nike" && modeloProducto == "air force") {
        precio = 900;
      } else if (marcaProducto == "nike" && modeloProducto == "air jordan") {
        precio = 1200;
      } else if (marcaProducto == "adidas" && modeloProducto == "yeezy") {
        precio = 1100;
      } else {
        alert("error de producto");
      }
    continuarComprando = prompt("Desea seguir comprando?");
}
console.log(`el total es ${precio++} U$S`);
function precioZapatilla(){
  let marca = prompt("Ingrese la marca de su zapatilla");
  let modelo = prompt("Ingrese el modelo");
  if (marca=="nike"&& modelo=="air jordan"){
      precio = ("U$ 900");
  }else if(marca=="adidas"&& modelo=="yeezy"){
      precio = ("U$ 700");
  }else if(marca=="nike"&& modelo=="air force"){
      precio = ("U$ 500");
  }else{
      alert("Error de marca o modelo ingresado")
  }
}
precioZapatilla();
alert(`Su precio es de ${precio}`);
precioZapatilla();
alert(`Su precio es de ${precio}`); */
// CARRITO NUEVO
class Producto {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
}

const zapatillas = [
  { id: 1, marca: "Nike", modelo: "Air Force", precio: 150 },
  { id: 2, marca: "Nike", modelo: "Air Uptempo", precio: 250 },
  { id: 3, marca: "Nike", modelo: "Air Max 720", precio: 220 },
  { id: 4, marca: "Nike", modelo: "Air Huarache", precio: 350 },
];

const productoSeleccionado = [];
let cantidadProductos = parseInt(
  prompt("Ingrese la cantidad de productos a comprar")
);
do {
  let productID = parseInt(
    prompt(`Bienvenido/a estos son nuestros productos, seleccione uno a continuacion por el numero de ID: 
  Zapatilla Marca:  ${zapatillas[0].marca}, Modelo: ${zapatillas[0].modelo}, Precio: ${zapatillas[0].precio} U$S, ID: ${zapatillas[0].id}
  Zapatilla Marca:  ${zapatillas[1].marca}, Modelo: ${zapatillas[1].modelo}, Precio: ${zapatillas[1].precio} U$S, ID: ${zapatillas[1].id}
  Zapatilla Marca:  ${zapatillas[2].marca}, Modelo: ${zapatillas[2].modelo}, Precio: ${zapatillas[2].precio} U$S, ID: ${zapatillas[2].id}
  Zapatilla Marca:  ${zapatillas[3].marca}, Modelo: ${zapatillas[3].modelo}, Precio: ${zapatillas[3].precio} U$S, ID: ${zapatillas[3].id}
`)
  );
  if (productID === 1) {
    productoSel = zapatillas[0];
  } else if (productID === 2) {
    productoSel = zapatillas[1];
  } else if (productID === 3) {
    productoSel = zapatillas[2];
  } else if (productID === 4) {
    productoSel = zapatillas[3];
  }
  productoSeleccionado.push(productoSel);
} while (productoSeleccionado.length != cantidadProductos);
console.log(productoSeleccionado);



const total = productoSeleccionado.reduce((acum, el)=> acum +el.precio*1.21, 0);
console.log(`Precio con i.v.a incluido ${total} U$S`);
/* const zapaSeleccionada = zapatillas.find((elem)=> elem.id === seleccionarProducto);
console.log(zapaSeleccionada);




/* while(seleccionarProducto != 0){
  seleccionarProducto = parseInt(prompt(`Bienvenido/a estos son nuestros productos, seleccione uno a continuacion por el numero de ID 'AL SELECCIONAR 0, SE CIERRA LA COMPRA': 
  Zapatilla Marca:  ${zapatillas[0].marca}, Modelo: ${zapatillas[0].modelo}, Precio: ${zapatillas[0].precio} U$S, ID: ${zapatillas[0].id}
  Zapatilla Marca:  ${zapatillas[1].marca}, Modelo: ${zapatillas[1].modelo}, Precio: ${zapatillas[1].precio} U$S, ID: ${zapatillas[1].id}
  Zapatilla Marca:  ${zapatillas[2].marca}, Modelo: ${zapatillas[2].modelo}, Precio: ${zapatillas[2].precio} U$S, ID: ${zapatillas[2].id}
  Zapatilla Marca:  ${zapatillas[3].marca}, Modelo: ${zapatillas[3].modelo}, Precio: ${zapatillas[3].precio} U$S, ID: ${zapatillas[3].id}
  `))
} */
/* console.log(seleccionarProducto); */
//busca producto

/*  let input = document.getElementById("input");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  console.log(input.value);
}) */
/* let seleccionarProducto = parseInt(prompt(`Bienvenido/a estos son nuestros productos, seleccione uno a continuacion por el numero de ID 'AL SELECCIONAR 0, SE CIERRA LA COMPRA': 
    Zapatilla Marca:  ${zapatillas[0].marca}, Modelo: ${zapatillas[0].modelo}, Precio: ${zapatillas[0].precio} U$S, ID: ${zapatillas[0].id}
    Zapatilla Marca:  ${zapatillas[1].marca}, Modelo: ${zapatillas[1].modelo}, Precio: ${zapatillas[1].precio} U$S, ID: ${zapatillas[1].id}
    Zapatilla Marca:  ${zapatillas[2].marca}, Modelo: ${zapatillas[2].modelo}, Precio: ${zapatillas[2].precio} U$S, ID: ${zapatillas[2].id}
    Zapatilla Marca:  ${zapatillas[3].marca}, Modelo: ${zapatillas[3].modelo}, Precio: ${zapatillas[3].precio} U$S, ID: ${zapatillas[3].id}
`));
 */

/* if(productoSeleccionado === 1){
  productoSel=zapatillas[0]
}else if(productoSeleccionado === 2){
  productoSel=zapatillas[1]
}else if(productoSeleccionado === 3){
  productoSel=zapatillas[2]
}else if(productoSeleccionado === 4){
  productoSel=zapatillas[3]
} */

/* console.log(zapasElegidas(productoSel));

 */
