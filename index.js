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

// contenedor por js
for(const zapatilla of zapatillas) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML= `<h3>ID: ${zapatilla.id}</h3>
                          <p> Marca: ${zapatilla.marca}</p>
                          <p> Modelo: ${zapatilla.modelo}</p>
                          <b> Precio: ${zapatilla.precio}</b>`;
  document.body.appendChild(contenedor)
}



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
  let zapaSeleccionada = zapatillas.find((elem)=> elem.id === productID);
  productoSeleccionado.push(zapaSeleccionada);
} while (productoSeleccionado.length != cantidadProductos);
/* console.log(productoSeleccionado); */


const total = productoSeleccionado.reduce((acum, el)=> acum +el.precio*1.21, 0);
console.log(`Precio con i.v.a incluido ${total} U$S`);

let storage = (clave, valor) => {
  localStorage.setItem(clave, valor)
}

for (const producto of productoSeleccionado){
  storage(producto.id, JSON.stringify(producto))
}

localStorage.setItem("productos", JSON.stringify(productoSeleccionado))

let productStorage = localStorage.getItem('productos')
console.log(JSON.parse(productStorage));



/* const zapaSeleccionada = zapatillas.find((elem)=> elem.id === seleccionarProducto);
console.log(zapaSeleccionada);

/* console.log(seleccionarProducto); */
//busca producto

/*  let input = document.getElementById("input");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  console.log(input.value);
}) */
/* if (productID === 1) {
  productoSel = zapatillas[0];
} else if (productID === 2) {
  productoSel = zapatillas[1];
} else if (productID === 3) {
   productoSel = zapatillas[2];
} else if (productID === 4) {
  productoSel = zapatillas[3];
} */