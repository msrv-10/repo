// CARRITO NUEVO
const carritoCompras = [];

class Producto {
  constructor(id, marca, modelo, precio, cantidad) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const zapatillas = [
  { id: 1, marca: "Adidas", modelo: "Boost Black", precio: 150, cantidad: 1 },
  { id: 2, marca: "Adidas", modelo: "Harden B/E 3", precio: 250, cantidad: 1 },
  { id: 3, marca: "Adidas", modelo: "Harden S3", precio: 220, cantidad: 1 },
  { id: 4, marca: "Adidas", modelo: "B Black", precio: 350, cantidad: 1 },
];
// contenedor por js
for (const zapatilla of zapatillas) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3>ID: ${zapatilla.id}</h3>
                          <p> Marca: ${zapatilla.marca}</p>
                          <p> Modelo: ${zapatilla.modelo}</p>
                          <b> Precio: ${zapatilla.precio}</b>
                          <input type= "button" class="button button--transition" onClick=addItem(${zapatilla.id}) value="Agregar al carrito">
                          <input type= "button" class="button button--transition" onClick=removeItem(${zapatilla.id}) ${zapatilla.cantidad < 1 ? 'disabled' : ''} value="Remover del carrito">`;
  document.body.appendChild(contenedor);
}

let contenedorTotal = document.createElement("div");
contenedorTotal.innerHTML = `<input type= "button" class="button button--transition" onClick=showTotal() value="Total">`;
document.body.appendChild(contenedorTotal);


/* let storage = (clave, valor) => {
  localStorage.setItem(clave, valor);
};  
for (const producto of carritoCompras) {
  storage(producto.id, JSON.stringify(producto));
}  
localStorage.setItem("productos", JSON.stringify(carritoCompras));  


 */

function addItem(id) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tu producto ha sido agregado correctamente',
    showConfirmButton: false,
    timer: 1500
  })
  let productoSeleccionado = zapatillas.find((elem) => elem.id === id);
  let productoRepetido = carritoCompras.findIndex((elem) => elem.id === id);
  productoRepetido === -1 ? carritoCompras.push(productoSeleccionado) : (carritoCompras[productoRepetido].cantidad = carritoCompras[productoRepetido].cantidad + 1);
  console.log(carritoCompras);
  let productosFinales = document.createElement("p");
  productosFinales.innerHTML = `<h3>${JSON.stringify(productoSeleccionado)}</h3>`;
  document.body.append(productosFinales);
  localStorage.setItem("productos", JSON.stringify(carritoCompras)); 
}

function removeItem(borrar){
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Tu producto ha sido removido correctamente',
    showConfirmButton: false,
    timer: 1500
  })
  let productDelete = zapatillas.find((elem) => elem.id === borrar);
  let productRepeat = carritoCompras.findIndex((elem) => elem.id === borrar);
  productRepeat === -1 ? carritoCompras.pop(productDelete) : (carritoCompras[productRepeat].cantidad = carritoCompras[productRepeat].cantidad - 1);  
  console.log(carritoCompras);
  let itemBorrado = document.createElement("p");
  itemBorrado.innerHTML = `<h2>Se restan ${productDelete.precio} U$S</h2>`;
  document.body.append(itemBorrado);
  let deletedElement = document.createElement("p");
  deletedElement.innerHTML = `<h3>${JSON.stringify(productDelete)}</h3>`;
  document.body.append(deletedElement);
/*   let storage = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };  
  for (const producto of carritoCompras) {
    storage(producto.id, JSON.stringify(producto));
  }   */
  localStorage.setItem("productos", JSON.stringify(carritoCompras)); 
}

function showTotal(){
  /* let total = carritoCompras.reduce((acum, el) => acum + el.precio * el.cantidad * 1.21, 0); */
  Swal.fire({
    imageUrl: 'https://placeholder.pics/svg/300x1500',
    imageHeight: 1500,
    imageAlt: 'A tall image'
  })
  let productStorage = localStorage.getItem("productos");
  console.log(productStorage);
  localStorage != carritoCompras ? total = JSON.parse(productStorage).reduce((acum, el) => acum + el.precio * el.cantidad * 1.21, 0) : carritoCompras.reduce((acum, el) => acum + el.precio * el.cantidad * 1.21, 0);
  let precioFinal = document.createElement("p");
  precioFinal.innerHTML = `<h2>El precio final es de ${total} U$S</h2>`;
  document.body.append(precioFinal);
  
}
/* let productStorage = localStorage.getItem("productos"); */



/* let total = carritoCompras.reduce((acum, el) => acum + el.precio * el.cantidad * 1.21, 0);

let contenedorTotal = document.createElement("div");
contenedorTotal.innerHTML = `<h2>Total: ${total} U$S</h2>`;
document.body.appendChild(contenedorTotal); */







/* let storage = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

for (const producto of carritoCompras) {
  storage(producto.id, JSON.stringify(producto));
}

localStorage.setItem("productos", JSON.stringify(carritoCompras));

let productStorage = localStorage.getItem("productos");
console.log(JSON.parse(productStorage));
 */
/* const zapaSeleccionada = zapatillas.find((elem)=> elem.id === seleccionarProducto);
console.log(zapaSeleccionada);

/* console.log(seleccionarProducto);
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
/* for (const zapatilla of zapatillas){
  let addZapatilla = zapatillas.find((elem)=> elem.id === boton)
} */

/* let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a comprar"));

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
  carritoCompras.push(zapaSeleccionada);
} while (carritoCompras.length != cantidadProductos); */
/* console.log(carritoCompras); */
