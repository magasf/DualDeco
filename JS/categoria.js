let listaArticulos;

/*let imprimirDatos = document.getElementById("productosPrint")
*/
if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}


let dato = prompt("Ingrese la categoria del producto a comprar")
listaFiltrada = listaArticulos.filter(e => e.categoria === dato)


if (listaFiltrada.length != 0) {

    listaFiltrada.forEach(element => {
        console.log(element.nombre + " " + element.categoria);
    });

} else {
    console.log("NO TENES NINGUN PRODUCTO CON ESA CATEGORIA");
}
