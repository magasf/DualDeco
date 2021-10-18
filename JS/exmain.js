//Precios de los productos

const precioAlmohadones = 1350;
const precioVelas = 500;
const precioMacetas = 980;
//Almaceno las provincias en las que puedo hacer envío en una variable
const provincias = ["santa fe", "entre rios", "buenos aires"];

//Funciones para validar que los datos ingresados sean correctos 
const validarArticulo = (articulo) => articulo !== "almohadones" && articulo !== "velas" && articulo !== "macetas";
const validarCantidad = (cantidad) => isNaN(cantidad) || cantidad <= 0;
const provinciaCorrecta = (provincia) => provincias.includes(provincia);

//Función para calcular el precio total
const calcularCosto = (articulo, cantidad) => {
    let costo;
    switch (articulo) {
        case 'almohadones':
            costo = cantidad * precioAlmohadones;
            break;
        case 'velas':
            costo = cantidad * precioVelas;
            break;
        case 'macetas':
            costo = cantidad * precioMacetas;
            break;
    }
    return costo;
}

//Funciones para pedir los datos

const pedirArticulo = () => {
    let articulo = prompt("¿Que artículo desea comprar: Almohadones, Velas, Macetas?").toLowerCase();
    while (validarArticulo(articulo)) {
        alert("Por favor, ingrese la palabra correctamente");
        articulo = prompt("¿Que artículo desea comprar: Almohadones, Velas, Macetas?").toLowerCase();
    }
    return articulo;
}

const pedirCantidad = (articulo) => {
    let cantidad = parseInt(prompt(`Ingrese que cantidad de ${articulo} desea comprar`));
    while (validarCantidad(cantidad)) {
        alert("Por favor, ingrese una cantidad correcta");
        cantidad = parseInt(prompt(`Ingrese que cantidad de ${articulo} desea comprar`));
    }
    return cantidad;
}

const presupuestar = () => {
    const articulo = pedirArticulo();
    const cantidad = pedirCantidad(articulo);
    const provincia = prompt("¿A qué provincia desea enviar?").toLowerCase();
    if (!provinciaCorrecta(provincia)) {
        alert('Por el momento no hacemos envios a la provincia seleccionada');
    } else {
        alert(`Recibo por la compra de ${cantidad} ${articulo} - Total a pagar: $${calcularCosto(articulo, cantidad)} - \nDestino: provincia de ${provincia}`);
    }
}

presupuestar();

class Articulos {
    constructor(articulo, precio, stock, valido) {
        this.articulo = articulo;
        this.precio = precio;
        this.stock = stock;
        this.disponible = valido;
    }
    comprar(cantidad) {
        if(this.stock <= 0){
            console.log("El articulo deseado ya no esta disponible, sin stock");
            this.disponible = false
        } else{
            this.stock = this.stock - cantidad
            console.log(`Compraste un ${this.nombre}, te salio ${this.precio * cantidad}`);
        }
    }
}
const Almohadones = new Productos("Almohadones", 1350, 15, true);
const Velas = new Productos("Velas", 500, 10, true);
const Macetas = new Productos("Macetas", 980, 5, true);

/*
let Productos = []*/


//Detalles de css en galeria
AOS.init();
baguetteBox.run('.productos');


$("#total").hover(function () {
   $(this).css("color", "Black",);
   $(this).css("font-size", "50px",);
});
$("#total").mouseleave(function () {
   $(this).css("color", "Black",);
   $(this).css("font-size", "30px",);
});
