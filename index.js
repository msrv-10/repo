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
console.log(`el total es ${precio++} U$S`); */
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
alert(`Su precio es de ${precio}`);