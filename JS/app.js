/*Base de datos de algunos productos*/ 

const url = './JSON/api.json';

//Funcion para mostrar productos guardados en base de datos al clickear la img correspondiente
//VELAS
$('#Velas').on("click", () => {
	$(".imprimirVelas").slideToggle(2000)
});
$('#Velas').click(() => {
    $.get(url, (respuesta, estado) => {
        if(estado == "success"){
            for(let i = 0; i< respuesta.length; i++){
                
                if(respuesta[i].categoria == "Velas"){
                   
                    console.log(respuesta[i].title + " " + respuesta[i].precio)
                    
                    $(".imprimirVelas").prepend(`
                  
                    <div id="template-card">
                         <div class="col-12 mb-2 col-md-4">
                             <div class="card">
                                 <div class="card-body">
                                     <h5>${respuesta[i].categoria}</h5>
                                     <p>${respuesta[i].nombre}</p>
                                     <p>$${respuesta[i].precio}</p>
                                     <p>Codigo ${respuesta[i].codigo}</p>
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
//ALMOHADONES
$('#Almohadones').on("click", () => {
	$(".imprimirAlmohadones").slideToggle(2000)
});
$('#Almohadones').click(() => {
    $.get(url, (respuesta, estado) => {
        if(estado == "success"){
            for(let i = 0; i< respuesta.length; i++){
                
                if(respuesta[i].categoria == "Almohadones"){
                   
                    console.log(respuesta[i].title + " " + respuesta[i].precio)
                    
                    $(".imprimirAlmohadones").prepend(`
                  
                    <div id="template-card">
                         <div class="col-12 mb-2 col-md-4">
                             <div class="card">
                                 <div class="card-body">
                                     <h5>${respuesta[i].categoria}</h5>
                                     <p>${respuesta[i].nombre}</p>
                                     <p>$${respuesta[i].precio}</p>
                                     <p>Codigo ${respuesta[i].codigo}</p>
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
$('#Accesorios').on("click", () => {
	$(".imprimirAccesorios").slideToggle(2000)
});
$('#Accesorios').click(() => {
    $.get(url, (respuesta, estado) => {
        if(estado == "success"){
            for(let i = 0; i< respuesta.length; i++){
                
                if(respuesta[i].categoria == "Accesorios"){
                   
                   console.log(respuesta[i].title + " " + respuesta[i].precio)
                    
                    $(".imprimirAccesorios").prepend(`
                  
                    <div id="template-card">
                         <div class="col-12 mb-2 col-md-4">
                             <div class="card">
                                 <div class="card-body">
                                     <h5>${respuesta[i].categoria}</h5>
                                     <p>${respuesta[i].nombre}</p>
                                     <p>$${respuesta[i].precio}</p>
                                     <p>Codigo ${respuesta[i].codigo}</p>
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


//Funcion botón comprar



