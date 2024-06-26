let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo =10;

function asginarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroDeUsuario){
        asginarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        // el usuario no acerto
        if(numeroDeUsuario> numeroSecreto){
            asginarTextoElemento('p', 'El numero es menor');
        }else{
            asginarTextoElemento('p', 'El numero es mayor');
        }

        console.log(intentos);

        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asginarTextoElemento('h1','¡Juego del Numero Secreto!');
    asginarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`); 

    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // Limpiar Caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    // si el numero genrado esta incluido en la lista hacemos una opeacion
    if(listaNumerosSorteados.length == numeroMaximo){
        asginarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else{
        if(listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroSecreto);
            console.log(numeroSecreto);
            return numeroSecreto;
        }
    }
} 

condicionesIniciales();