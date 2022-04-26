//crear cuenta en la web

/* let usuario = prompt("ingrese su nombre de usuario");
let contrasenia = prompt("ingrese su contrasenia");
if(nombre || contrasenia == true){
    console.log("ingreso correcto");
}else{
    console.log("ingreso erroneo");
} */
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