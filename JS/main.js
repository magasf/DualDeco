
//Formulario para ingresar al administrador
 $('#btn-abrir-usuario').on('click', function () {
	$('#overlay-2').addClass('active');
	$('#usuario').addClass('active');
});


$('#btn-cerrar-usuario').on('click', function (e) {
	e.preventDefault();
	$('#overlay-2').removeClass('active');
	$('#usuario').removeClass('active');
});

//Mostrar objetos desde foto


//Entidades
/*
class User{
    constructor(nombre, contraseña){
        this.nombre = nombre;
        this.pass = contraseña;
    }

}

const magali = new User("magali", "dualdeco");

let listaAdministradores;
if(localStorage.getItem("listaAdm") == null) {
    listaAdministradores = []
}else {
    listaAdministradores = JSON.parse(localStorage.getItem("listaAdm"))
}


const confirmacionDeAcceso = () => {

    const administradorNombre = document.getElementById("name");
    const administradorPass = document.getElementById("pass");
    const bucle = true;
    
    while(bucle){

        if(nombre === administradorNombre.nombre && pass === administradorPass.pass) {
            bucle = false;
            break;
        }else {
                alert("USUARIO INCORRECTO");
        }
    }

    

}


confirmacionDeAcceso()*/






//Slogan con animación
// OBJECT: 'retype' controls the deletion and creation of new words
let retype = {
	
	retypePhrases: [
		'armonia.',
		'estabilidad.',
		'comodidad.',
		'estilo.',
		'como vos.',
		'tu refugio.'
	],
	index       : -1,
	elem        : document.getElementById('retype'),
	start       : function(){
		let _this = this;
		setTimeout( function(){
			_this.deleteLetter();
		}, 3000 ); // Delay the start of a new word by 3 seconds
	},// END retype.start()
	deleteRepeat: function(){
		this.deleteLetter();
	},// END retype.deleteRepeat()
	deleteLetter: function(){
		let newWord = this.elem.innerHTML;
		if( newWord.length > 0 ){
			newWord = newWord.substring(0, newWord.length - 1);
			let _this = this;
			setTimeout( function(){
				_this.elem.innerHTML = newWord;
				_this.deleteRepeat();
			}, 75 );
		}else{
			this.newLetter();
		}// END if( newWord.length > 0 )
	},// END retype.deleteLetter()
	newRepeat   : function(){
		this.newLetter();
	},// END retype.newRepeat()
	newLetter   : function(){
		let newWord = this.elem.innerHTML;
		if( newWord.length === 0 ){
			this.index++;
			if( this.index >= this.retypePhrases.length ){
				this.index = 0;
			}
		}// END if( newWord.length === 0 )
		let newLetters = this.retypePhrases[ this.index ];
		if( newLetters.length > newWord.length ){
			newLetters = newLetters.substring(0, ( newWord.length + 1 ) );
			let _this = this;
			// Add a slight random variation in retype time to make the letter typing seem more 'human'
			let time = Math.round( Math.random() * 100 ) + 100;
			setTimeout( function(){
				_this.elem.innerHTML = newLetters;
				_this.newLetter();
			}, time );
		}else{
			this.start();
			// Yep, this makes the retype an infinite loop
		}// END if( newLetters.length > newWord.length )
	}// END retype.newLetter()
};

retype.start();

/*Productos show*/
//Preguntar si se puede hacer un switch y que cada vez que presiono una img las demas se oculten
/*
$("#cajaAlmohadones").on("click", () => {
	$(".hiddenAlmohadones").slideToggle(2000)
});

$("#cajaVelas").on("click", () => {
	$(".hiddenVelas").slideToggle(2000)
});

$("#cajaAccesorios").on("click", () => {
	$(".hiddenAccesorios").slideToggle(2000)
});
*/