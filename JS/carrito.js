
//Captura el contenedor sobre el cuál vos a imprimir los datos
const contenedor =document.getElementById("carrito");

//Funciones para mostrar los productos del carrito
const mostrarCarrito = () => {
    //Contenedor vacío
    contenedor.innerHTML = "";
    //Traemos los datos del carrito desde el localStorage
    let carrito = localStorage.getItem("carrito");
    //Inicializo como un array vacío
    if (carrito === null) {
        carrito = [];
    } else {
        carrito = JSON.parse(carrito);
    }
    if (carrito.length === 0) {
        contenedor.innerHTML = 
        '<p class="carritoVacio"> El carrito está vacío</p>';
    } else {
        carrito.array.forEach((item) => {
            contenedor.innerHTML += `
            <tr>
            <td>
                ${item.nombre}
            </td>
            <td>
            ${item.precio}
            </td>
            <td>
                <button  id="${item.id}" class="button">Remover</button>
            </td>
        </tr>
            `;
        });
    }

};

//Función para borrar todos los productos iguales de un carrito
const borrarDelCarrito = (id) => {
    //Intento traer el carrito de localStorage
    let carrito = localStorage.getItem("carrito");
    //Si no había carrito lo inicializo como un array vacío
    if (carrito === null) {
        carrito = [];
    } else {
        //Si había carrito lo parseo de string a array
        carrito = JSON.parse(carrito);
    }
    //Almaceno en carrito todos los productos del viejo carrito que no tengan ese id
    carrito = carrito.filter((producto) => producto.id !== id);
    //Guardo el carrito en el localStorage, está igual que antes pero sin el producto con el id que le pasé.
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Escucho si se hace click en la tabla. Si es sobre el botón remover hay que eliminar esa fila y sacarlo del localStorage
contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) {
        borrarDelCarrito(parseInt(e.target.id));
        //Actualizo el carrito para que se vean los cambios
        mostrarCarrito();
    }
});

//Queremos que al cargar la página se vea el carrito
mostrarCarrito();









/*
let listaArticulos;
let imprimirMercaderia = document.getElementById("productsPrint")

if (localStorage.getItem("carrito") == null) {
    alert("Carrito Vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("listaMercaderia"))
}

listaArticulos.forEach(element => {
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


const finalizarCompra = () => {

    let monto = 0

    listaArticulos.forEach(e => {
        monto += e.precio
    })

    alert("Felicitaciones, tu compra fue aprobada, gastaste " + monto);
    localStorage.removeItem("carrito")
}

btn.addEventListener("click", () => {
    finalizarCompra()
});*/