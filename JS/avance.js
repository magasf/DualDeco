

// VARIABLES

let productsList = [];


//ENTIDADES

class ProductsInfo {
    constructor({categoria, nombre, precio, stock, codigo}) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.codigo = codigo;
    }
}



//fUNCIONES

/*Funcion de crear producto*/ 

const newProduct = () => {
    const product = new ProductsInfo({
        categoria: document.getElementById("categoria").value,
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value,
        codigo: document.getElementById("codigo").value
    })
    
    return product
}
/*Funcion de agregar producto*/
//Return array
const insertNewProduct = (info) => {
    info.push(newProduct())
    return info
}
/*Funcion para guardar lista de productos*/ 
const saveNewProduct = () => {
    
    productsList = verifyListStorage()
    localStorage.setItem("productsList", JSON.stringify(productsList))

}
/*Funcion de verificar storage*/
// return array
const verifyListStorage = () => {
    let list;
    if (localStorage.getItem("productsList") != null) {
        list = insertNewProduct(JSON.parse(localStorage.getItem("productsList")))
        return list
    } else {
        insertNewProduct(productsList)
        list = productsList
        return list
    }
}

/*Funcion de imprimir datos en el administrador*/

const printNewProducts = () =>{

    verifyListStorage().forEach(obj => {

        document.getElementById("productsPrint").innerHTML += `
        <div id="template-card">
             <div class="col-12 mb-2 col-md-4">
                 <div class="card">
                     <div class="card-body">
                         <h5>${obj.nombre}</h5>
                         <p>${obj.categoria}</p>
                         <p>${obj.precio}</p>
                         <p>Codigo ${obj.codigo}</p>
                         <button class="btn btn-dark">Comprar</button>
                     </div>
                 </div>
             </div>
         </div>
        
    `

    })
}

/*Funcion imprimir datos en el index*/ 


//EVENTOS
document.getElementById("btn-Agregar").addEventListener("click",(e) => {
    e.preventDefault()

    saveNewProduct()
})
if(localStorage.getItem("productsList") != null){

    printNewProducts()

}