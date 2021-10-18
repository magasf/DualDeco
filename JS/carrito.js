
let listaArticulos;
let imprimirDatos = document.getElementById("productosPrint")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    alert("Carrito Vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaArticulos.forEach(element => {
    
    
});


const finalizarCompra = () => {

    let monto = 0

    listaObjetos.forEach(e => {
        monto += e.precio
    })

    console.log("Felicitaciones, tu compra fue aprobada, gastaste " + monto);
    localStorage.removeItem("carrito")
}

btn.addEventListener("click", () => {
    finalizarCompra()
});