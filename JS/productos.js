
//capturo el contenedor donde se van a mostrar los productos
const contenedor = document.getElementById("productos__contenedor");

//Función para mostrar todos los productos
const mostrarTodosLosProductos = () => {
    //Vacío el html del contenedor
    contenedor.innerHTML = "";
    //Por cada producto de data creo etiquetas html y las agrego al contenedor
    productos.forEach((producto) => {
        contenedor.innerHTML += `
        <div class="card">
            <img src="${producto.image}" alt="" class="card-img">
            <h3 class="card-title">${producto.nombre}</h3>
            <p>${producto.precio}$</p>
            <button class="button agregar" id=${producto.id}>Agregar al carrito</button>
        </div>
        `;
    });
};

//Función para agregar un producto al carrito
const agregarAlCarrito = (id) => {
    //Busco el producto en mi data y lo almaceno en una variable
    let producto = productos.find((producto) => producto.id === id);
    //Intento traer el carrito de localStorage
    let carrito = localStorage.getItem("carrito");
    //Si no había carrito lo inicializo como un array vacío
    if (carrito === null) {
        carrito = [];
    } else {
        //Si había carrito lo parseo de string a array
        carrito = JSON.parse(carrito);
    }
    //agrego el nuevo producto al carrito
    carrito.push(producto);
    //guardo el carrito en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Escuchamos si le hacen click al contenedor
contenedor.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    //Si el lugar al que le hacen click tiene la clase agregar es porque es el botón para agregar al carrito
    if (e.target.classList.contains("agregar")) {
        agregarAlCarrito(parseInt(e.target.id));
    }
});

//Queremos que al entrar a la página se muestren todos los productos
mostrarTodosLosProductos();


































/*

let listaArticulos;
let imprimirMercaderia = document.getElementById("productsPrint")

if (localStorage.getItem("listaMercaderia") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaArticulos = JSON.parse(localStorage.getItem("listaMercaderia"))
}

let listaArticulos = JSON.parse(localstorage.getItem("listaMercaderia"))

listaArticulos.forEach(element => {
    
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

const comprar = (datoComprar) =>{
    let carrito;
    if(localStorage.getItem("carrito") == null){
        carrito = []
        
    }else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(datoComprar)

    localStorage.setItem("carrito",JSON.stringify(carrito))
   
}



*/