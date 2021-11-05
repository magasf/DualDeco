
const url = './JSON/api.json';


$('#items').prepend('<button id="ejemplo">Mostrar</button>');
$('#ejemplo').click(() => {
    $.get(url, (respuesta, estado) => {
        if(estado == "success"){
           console.log(respuesta[0])
           $("#items").prepend(`
           <div id="template-card">
                <div class="col-12 mb-2 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5>${respuesta[0].title}</h5>
                            <p>${respuesta[0].categoria}</p>
                            <p>${respuesta[0].precio}</p>
                            <button class="btn btn-dark">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
           
       `)
            
        }
    })
})





/*para tener en cuenta dentro de lo anterior*/

/*url.forEach(respuesta => {
                $('#productsPrint').prepend(`
                <div class="card contenedorProductos"> 
                <h3 class="card-title">${respuesta.title}</h3>
                <p>${respuesta.categoria}$</p>
                <p>${respuesta.precio}$</p>
                <button class="button-agregar" id=${respuesta.id}>Agregar al carrito</button>
            </div>
            `)

<img src="${producto.image}" alt="" class="card-img imgProduct">
------------------------------------------------------------------------
*/
/*
const items = document.getElementById('items');

const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {

	fetchData();

});

const fetchData = async () => {
	try{
		const res = await fetch('./JSON/api.json');
		const data = await res.json();
		rellenarCards(data);
		
	} catch (error){
		console.log(error);
	}
};

const rellenarCards = data => {
	data.forEach(producto => {
		templateCard.querySelector('h5').textContent = producto.title;
		templateCard.querySelector('p').textContent = producto.precio;
		templateCard.querySelector('label').textContent = producto.categoria;
		templateCard.querySelector('btn-dark').dataset.id = producto.id;
		
		
		const clone = templateCard.cloneNode(true);
		fragment.appendChild(clone);
	})
	items.appendChild(fragment);

};*/
