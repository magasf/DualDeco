let listaArticulos;
let imprimirDatos = document.getElementById("productosPrint")

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaArticulos = JSON.parse(localStorage.getItem("lista"))
}

listaArticulos.forEach(element => {

    console.log(element.nombre + " " + element.categoria);
});

const comprar = () =>{
    let carrito = JSON.parse(localStorage.getitem("carrito"))
}