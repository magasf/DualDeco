
const url = './JSON/api.json';


$('#items').prepend('<button id="ejemplo">Mostrar</button>');
$('#ejemplo').click(() => {
    $.get(url, (respuesta, estado) => {
        if(estado == "success"){
            for(let i = 0; i< respuesta.length; i++){
                
                if(respuesta[i].categoria == "Velas"){
                   
                   console.log(respuesta[i].title + " " + respuesta[i].precio)
                    
                    $("#items").prepend(`
                    <div id="template-card">
                         <div class="col-12 mb-2 col-md-4">
                             <div class="card">
                                 <div class="card-body">
                                     <h5>${respuesta[i].title}</h5>
                                     <p>${respuesta[i].categoria}</p>
                                     <p>${respuesta[i].precio}</p>
                                     <button class="btn btn-dark">Comprar</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                    
                `)
                }
            }
           
            
        }
    })
})

