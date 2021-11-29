

const cards = document.getElementById('cards');
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}
let totalCompra= 0




document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

cards.addEventListener('click', e =>{
    addCarrito(e)
})
items.addEventListener('click', e=> {
    btnAccion(e)
})

const fetchData = async () => {
    try{
        const res = await fetch('./JSON/api.json')
        const data = await res.json()
        /*console.log(data)*/
        pintarCards(data)
    } catch (error){
        console.log(error)
    }
}

const pintarCards = data => {
    
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.nombre
        templateCard.querySelector('h6').textContent = producto.categoria
        templateCard.querySelector('p'[0]).textContent = producto.precio
        templateCard.querySelector('.btn-dark').dataset.codigo = producto.codigo
        
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
       
    })
    
    cards.appendChild(fragment)
}

const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
       setCarrito(e.target.parentElement) 
    }
    e.stopPropagation()
}
const setCarrito = objeto => {
    console.log(objeto)
    const producto = {
        codigo: objeto.querySelector('.btn-dark').dataset.codigo,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.codigo)){
        producto.cantidad = carrito[producto.codigo].cantidad + 1
    }
    carrito[producto.codigo] = {...producto}
    pintarCarrito()
}
const pintarCarrito = () => {
    console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.codigo
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.codigo = producto.codigo
        templateCarrito.querySelector('.btn-danger').dataset.codigo = producto.codigo
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
        

    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}
 const pintarFooter = () => {
     footer.innerHTML = ''
     if(Object.keys(carrito).length === 0) {
         footer.innerHTML = `
         <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
         `
         return
     }
     const nCantidad = Object.values(carrito).reduce((acc,{cantidad,precio}) => acc + cantidad, 0)
     const nPrecio = Object.values(carrito).reduce((acc,{cantidad,precio}) => acc + cantidad * precio, 0)
     
     templateFooter.querySelectorAll('td')[0].textContent = nCantidad
     templateFooter.querySelector('span').textContent = nPrecio
     totalCompra = nPrecio

     const clone = templateFooter.cloneNode(true)
     fragment.appendChild(clone)
     footer.appendChild(fragment)

     const btnVaciar = document.getElementById('vaciar-carrito')
     btnVaciar.addEventListener('click', () => {
         carrito = {}
         pintarCarrito()
     })

     const BtnFinalizarCompra = document.getElementById('BtnComprar')
    BtnFinalizarCompra.addEventListener('click', () => {
        
       

        alert('Su total a pagar es ' + nPrecio)
        /*console.log(nPrecio)*/
        
    })
 
}

    
const btnAccion = e => {
    if(e.target.classList.contains('btn-info')){
        
        const producto = carrito[e.target.dataset.codigo]
        producto.cantidad++
        carrito[e.target.dataset.codigo] = {...producto}
        pintarCarrito()
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.codigo]
        producto.cantidad--
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.codigo]
        }
        pintarCarrito()
    }
    
    e.stopPropagation()
}