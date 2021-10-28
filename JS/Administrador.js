



//Crear los articulos de la pag

class Productos {
    constructor({categoria, nombre, precio, stock}) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
}


const articulo = document.createElement("h3")
articulo.setAttribute("id", "elementoAgregado")
articulo.textContent = "Articulo Nuevo"
document.getElementById("productsPrint").appendChild(articulo)
console.log(articulo)


//Entidades

//Crear administradores nuevos
/*
class newUser{
    constructor(newName,newPassword){
        this.newName = newName;
        this.newPassword = newPassword;
    }
    
}*/




// Guardar usuarios administradores
/*
const crearAdministradores = () => {
    const administrador = new newUser({
        newName: document.getElementById("newName").value,
        newPassword: document.getElementById("newPass").value,
    })
    
    return administrador;
       
}
*/

/*listaAdministradores.push(guardarAdministradores())*/
/*
listaAdministradores.push(crearAdministradores())

localStorage.setItem("listaAdm", JSON.stringify(listaAdministradores))

if(localStorage.getItem("listaAdm") == null) {
    listaAdministradores = []
} else {
    listaAdministradores = JSON.parse(localStorage.getItem("listaAdm"))
}*/


let listaArticulos;
if (localStorage.getItem("listaMercaderia") == null) {
    listaArticulos = []
} else {
    listaArticulos = JSON.parse(localStorage.getItem("listaMercaderia"))
}

//Guardar meradería disponible

const guardarMercaderia = () => {
    const articulos = new Productos({
        categoria: document.getElementById("categoria").value,
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value
    })
    const cajaProducto = document.createElement("div")
    const articulo = document.createElement("h3")
    articulo.textContent = articulos.categoria
    cajaProducto.appendChild(articulo)
    const dato1 = document.createElement("p")
    dato1.textContent = articulos.nombre
    cajaProducto.appendChild(dato1)
    const dato2 = document.createElement("p")
    dato2.textContent = articulos.precio
    cajaProducto.appendChild(dato2)
    const dato3 = document.createElement("p")
    dato3.textContent = articulos.stock
    cajaProducto.appendChild(dato3)
    document.getElementById("productsPrint").appendChild(cajaProducto)
    return articulos
}
document.getElementById("btn-Agregar").addEventListener("click", () => {
    guardarMercaderia()
})

listaArticulos.forEach(element=> {
    const cajaProducto = document.createElement("div")
    const articulo = document.createElement("h3")
    articulo.textContent = articulos.categoria
    cajaProducto.appendChild(articulo)
    const dato1 = document.createElement("p")
    dato1.textContent = articulos.nombre
    cajaProducto.appendChild(dato1)
    const dato2 = document.createElement("p")
    dato2.textContent = articulos.precio
    cajaProducto.appendChild(dato2)
    const dato3 = document.createElement("p")
    dato3.textContent = articulos.stock
    cajaProducto = appendChild(dato3)
    document.getElementById("productsPrint").appendChild(cajaProducto)
    
    
});


