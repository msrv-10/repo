//crear cuenta en la web

/* let usuario = prompt("ingrese su nombre de usuario");
let contrasenia = prompt("ingrese su contrasenia");
if(nombre || contrasenia == true){
    console.log("ingreso correcto");
}else{
    console.log("ingreso erroneo");
} */
let marca = promt("Ingrese la marca de su zapatilla");
let modelo = prompt("Ingrese el modelo");
function precioZapatilla(){
    if (marca=="nike"||modelo=="air jordan"){
        precio = (900);
    }else if(marca=="adidas"||modelo=="yeezy"){
        precio = (700);
    }else if(marca=="nike"||modelo=="air force"){
        precio = 500;
    }else{
        alert("Error de marca o modelo ingresado")
    }
}
precioZapatilla(precio);