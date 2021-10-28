
//Esto es necesario en el main



//Entidades 
/*class User{
    constructor(name, password){
        this.name = name;
        this.pass = password;
    }

}
class Producto {
    constructor(categoria, nombre, precio, stock){
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
}

const Administrador1 = new User("Magali", "coderhouse")
const afirmativo = afirmativo;

let listaProductos;

if (localStorage.getItem("lista") == null) {
    listaProductos = []
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"))
}

const crearProducto = (categoria, nombre, precio, stock) => {
    const producto = new Producto(categoria, nombre, precio, stock)
    return producto
}

const confirmacionDeAcceso = () => {

    let bucle = true

    while (bucle) {

        const administradorNombre = document.getElementById("name");
        const administradorPass = document.getElementById("pass");

        if (administradorNombre === true) & administradorPass === true {
            bucle = false

            /*let ciclo = true;

            while (ciclo) {

                const nombre = prompt("ingrese nombre del producto");
                const categoria = prompt("ingrese categoria del producto");
                const precio = Number(prompt("ingrese precio del producto"));
                const stock = parseInt(prompt("Ingrese la cantidad de productos"))

                listaProductos.push(crearProducto(nombre, categoria, precio, stock))

                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar otro mas?")
            }*/
/*
            break;
        } else {
            alert("USUARIO INCORRECTO");
        }

    }

}

confirmacionDeAcceso()*/




//Ex main
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

//Categoría






let listaArticulos;
let imprimirMercaderia = document.getElementById("productsPrint")


if (localStorage.getItem("listaMercaderia") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaArticulos = JSON.parse(localStorage.getItem("listaMercaderia"))
}
let datoCategorias = document.getElementById("Categorias")
listaFiltrada = listaArticulos.filter(e => e.categoria === datoCategorias)
if(listaFiltrada.length != 0) {
    
    listaFiltrada.forEach(element => {
        let index = listaArticulos.indexOf(element)
        imprimirMercaderia.innerHTML +=  `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.nombre} </h5>
                <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
                <p class="card-text">${element.precio}</p>
                <button class="card-link" onclick="comprar(${index})>Comprar</button>
                  
            </div>
        </div>
    `
    });

}else {
    alert("La categoria seleccionada es incorrecta");
}

const comprar = (index) =>{
    let carrito;
    if(localStorage.getItem("carrito") == null){
        carrito = []
        
    }else {
        carrito = JSON.parse(localStorage.getItem("listaMercaderia"))
    }
    carrito.push(listaArticulos[index])

    localStorage.setItem("carrito",JSON.stringify(carrito))
   
}
