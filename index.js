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
class Producto{
  constructor(marca, modelo, precio){
      this.marca =marca;
      this.modelo=modelo;
      this.precio=precio;
  }
  zapasElegidas(){
    console.log(`La zapatilla elegida es marca: ${marcaZapas}, modelo: ${modeloZapas} `);
  }
}


let marcaZapas = prompt('Ingrese la marca de la zapatilla');
let modeloZapas = prompt('Ingrese el modelo de la zapatilla');

const zapatilla1 = new Producto(marcaZapas, modeloZapas)
zapatilla1.zapasElegidas();

if(marcaZapas == "nike" && modeloZapas == "air force"){
  precioZapas=125;
}else if (marcaZapas == "nike" && modeloZapas == "air jordan"){
  precioZapas = 150;
}else if (marcaZapas == "adidas" && modeloZapas == "yeezy"){
  precioZapas = 200;
}else{
  console.log("error, zapatilla no encontrada");
}
console.log(`el precio de su zapatilla es de ${precioZapas} U$S`);

const miCompra = [
  {marca: marcaZapas, modelo: modeloZapas, precio:precioZapas},
]
const total = miCompra.reduce((acum, el)=> acum +el.precio*1.21, 0);
console.log(`Precio con i.v.a incluido ${total} U$S`);