//******** Juego Piedra Papel o Tijera para el curso de Programación Básica de Platzi ***********//
//acceder a los elementos html
let jugador = document.getElementById("jugador");
let pc = document.getElementById("pc");
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijeras = document.getElementById("tijeras");


// declarar variables para la puntuación y inicializarlas en 0
let puntosPc = 0;
let puntosJugador = 0;
let resultado = "";

//mostrando en la pagina el marcador al iniciar el juego
jugador.innerHTML = 0;
pc.innerHTML = 0;

// declarar los eventos
piedra.addEventListener("click",eleccionPiedra);
papel.addEventListener("click",eleccionPapel);
tijeras.addEventListener("click",eleccionTijeras);

//funciones que son llamadas en el evento, en todos los casos se llama a la función que ejecuta el juego y se le pasa la elección del jugador
function eleccionPiedra() {
    document.getElementById("pcchoice").innerHTML="";
    var eleccion = piedra.value;
    document.getElementById("jugadorchoice").innerHTML=eleccion;
    juego(eleccion);
}

function eleccionPapel() {
    document.getElementById("pcchoice").innerHTML=""; //aquí se escribe en la etiqueta del html
    var eleccion = papel.value;
    document.getElementById("jugadorchoice").innerHTML=eleccion;
    juego(eleccion);
}

function eleccionTijeras() {
    document.getElementById("pcchoice").innerHTML=""; 
    let eleccion = tijeras.value;
    document.getElementById("jugadorchoice").innerHTML=eleccion;
    juego(eleccion);                      
}

// funcion que devuelve la eleccion de la pc en un string
function eleccionPc() {
    let eleccionPc1 = Math.floor(Math.random()* (3 + 1 - 1) + 1); //devuelve un numero aleatorio entre 1-3
    
    // se convierte el numero aleatorio a un String
    if (eleccionPc1 == 1) {
        var eleccionPc = "Piedra"        
    }

    if (eleccionPc1 == 2) {
       var eleccionPc = "Papel"        
    }

    if (eleccionPc1 == 3) {
       var eleccionPc = "Tijeras"        
    }
    
    document.getElementById("pcchoice").innerHTML=eleccionPc;
    //console.log("La pc Elijió " + eleccionPc);

    return eleccionPc; //se devuelve la elección de la PC en String

}
  
//Funcion que ejecuta el juego, a la funcion se le pasa la eleccion del jugador
function juego(eleccion){
   
    var eleccionPC = eleccionPc(); // se busca la eleccion de la PC

    if (eleccion==eleccionPC) { // se comprueba si hay empate

       // alert("El jugador eligió " + eleccion + " y la PC eligió " + eleccionPC + ". El resultado es: Empate");
       document.getElementById("resultadoJuego").innerHTML = "Empate!!!";
                
    }

    else if (eleccion == "Piedra" && eleccionPC == "Tijeras" || eleccion == "Papel" && eleccionPC == "Piedra" || eleccion == "Tijeras" && eleccionPC == "Papel" ) {

        //alert("El jugador eligió " + eleccion + " y la PC eligió " + eleccionPC + " Ganaste!!!!!!!"); // se comprueba si ganó el jugador, si no, perdió
        document.getElementById("resultadoJuego").innerHTML = "Ganaste!!!";
        puntosJugador++;
        jugador.innerHTML= puntosJugador; // aquí se muestra la puntuacion
        
    }

    else {
        //alert("El jugador eligió " + eleccion + " y la PC eligió " + eleccionPC + " Perdiste!!!!!!!");
        document.getElementById("resultadoJuego").innerHTML = "Perdiste!!!";
        puntosPc++;
        pc.innerHTML=puntosPc;
    }

   
}
