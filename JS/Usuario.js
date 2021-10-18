
//Formulario para ingresar al administrador

let btnAbrirUsuario = document.getElementById('btn-abrir-usuario'),
	overlay = document.getElementById('overlay-2'),
	usuario = document.getElementById('usuario'),
	btnCerrarUsuario = document.getElementById('btn-cerrar-usuario');

btnAbrirUsuario.addEventListener('click', function(){
	overlay.classList.add('active');
	usuario.classList.add('active');
});


btnCerrarUsuario.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	usuario.classList.remove('active');
});


//Entidades 

class User{
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

        const administrador = prompt("¿Eres Administrador? si lo eres responde afirmativo de lo contrario vete")
       //En un futuro aquí estarán los administradores registrados
       /* const nombre = prompt("Ingresa tu nombre");
        const pass = prompt("Ingresa tu contraseña")*/

        if (administrador === afirmativo) {
            bucle = false

            let ciclo = true;

            while (ciclo) {

                const nombre = prompt("ingrese nombre del producto");
                const categoria = prompt("ingrese categoria del producto");
                const precio = Number(prompt("ingrese precio del producto"));
                const stock = parseInt(prompt("Ingrese la cantidad de productos"))

                listaProductos.push(crearProducto(nombre, categoria, precio, stock))

                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar otro mas?")
            }

            break;
        } else {
            alert("USUARIO INCORRECTO");
        }

    }

}

confirmacionDeAcceso()


