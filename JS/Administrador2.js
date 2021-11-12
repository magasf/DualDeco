

document.addEventListener("DOMContentLoaded", function (e) {
    let userProfile = JSON.parse(localStorage.getItem("perfil"));
 console.log(localStorage.getItem("perfil"));
 console.log(userProfile.inputName); //devuelve undefined
    document.getElementById("inputName").value = userProfile.nombrePerfil;
    document.getElementById("inputSurname").value = userProfile.apellidoPerfil;
    document.getElementById("inputAge").value = userProfile.edadPerfil;
    document.getElementById("inputEmail").value = userProfile.emailPerfil;
    document.getElementById("inputPhone").value = userProfile.telPerfil;
 });

class ProductosInfo {
    constructor({categoria, nombre, precio, stock, codigo}) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.codigo = codigo;
    }
}



const guardarMercaderiaNueva = () => {
    const articulos = new ProductosInfo({
        categoria: document.getElementById("categoria").value,
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value,
        codigo: document.getElementById("codigo").value
    })
    window.localStorage.setItem("articulos", JSON.stringify(articulos));
    return articulos
}



/*

const boxNewproduct = document.createElement("h3")
boxNewproduct.setAttribute("id", "elementoAgregado")
boxNewproduct.textContent = "Articulo Nuevo"
document.getElementById("productsPrint").appendChild(boxNewproduct)
console.log(boxNewproduct)




let listaProductosNuevos;
if (localStorage.getItem("listaMercaderia") == null) {
    listaProductosNuevos = []
    
} else {
    listaProductosNuevos = JSON.parse(localStorage.getItem("listaMercaderia"))
}

//Guardar meradería disponible

const guardarMercaderiaNueva = () => {
    const articulos = new ProductosInfo({
        categoria: document.getElementById("categoria").value,
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value,
        codigo: document.getElementById("codigo").value
    })
    const cajaProducto = document.createElement("div")
    const articuloCategoria = document.createElement("h3")
    articuloCategoria.textContent = articulos.categoria
    cajaProducto.appendChild(articulo)
    const articuloNombre = document.createElement("p")
    articuloNombre.textContent = articulos.nombre
    cajaProducto.appendChild(dato1)
    const articuloPrecio = document.createElement("p")
    articuloPrecio.textContent = articulos.precio
    cajaProducto.appendChild(dato2)
    const articuloStock = document.createElement("p")
    articuloStock.textContent = articulos.stock
    cajaProducto.appendChild(dato3)
    const articuloCodigo = document.createElement("p")
    articuloCodigo.textContent = articulos.codigo
    cajaProducto.appendChild(dato3)
    document.getElementById("productsPrint").appendChild(cajaProducto)
    return articulos
}
document.getElementById("btn-Agregar").addEventListener("click", () => {
    guardarMercaderiaNueva()
})

listaProductosNuevos.forEach(element=> {
    const cajaProducto = document.createElement("div")
    const articuloCategoria = document.createElement("h3")
    articuloCategoria.textContent = articulos.categoria
    cajaProducto.appendChild(articuloNombre)
    const articuloNombre = document.createElement("p")
    articuloNombre.textContent = articulos.nombre
    cajaProducto.appendChild(dato1)
    const articuloPrecio = document.createElement("p")
    articuloPrecio.textContent = articulos.precio
    cajaProducto.appendChild(articuloPrecio)
    const articuloStock = document.createElement("p")
    articuloStock.textContent = articulos.stock
    cajaProducto = appendChild(articuloStock)
    const articuloCodigo = document.createElement("p")
    articuloCodigo.textContent = articulos.stock
    cajaProducto = appendChild(articuloCodigo)
    document.getElementById("productsPrint").appendChild(cajaProducto)
    
    
});



*/