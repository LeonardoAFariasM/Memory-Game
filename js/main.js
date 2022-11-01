//inicializacion variables
let tarjetasAbiertas=0;
let tarjeta1 = null;
let resultado1 = null;
let tarjeta2 = null;
let resultado2 = null;
let movimientos = 0;
let aciertos = 0;
let cronometro = false;
let timer = 0;
let tiempoFinal = null;
//tomando elementos html
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("tiempo");

//randomizacion de numeros
let numeros = [
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8
];

numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros)

//functions
function contarTiempo(){
    tiempoFinal = setInterval(()=>{
    timer++;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos⏳`;

    if(aciertos==8){
        clearInterval(tiempoFinal);
        //bloquearTarjetas();
    }
    },1000);
}
/*
function bloquearTarjetas(){
    for(let i = 0; i<15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}
*/
//Main function
function abrir(id){
if(cronometro == false){
        contarTiempo();
        cronometro = true;
    }


    tarjetasAbiertas++;
    console.log(tarjetasAbiertas);

if(tarjetasAbiertas == 1){
    //mostrar primer numero
    tarjeta1 = document.getElementById(id);
    resultado1 = numeros[id];
    tarjeta1.innerHTML = resultado1;

    //deshabilitar primer boton 
    tarjeta1.disabled=true;

}else if(tarjetasAbiertas == 2){
    //mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    resultado2 = numeros[id];
    tarjeta2.innerHTML = resultado2;

    //deshabilitar segundo boton
    tarjeta2.disabled=true;

    //incrementar movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if(resultado1 == resultado2){
    //resetear contador de tarjetas abiertas
    tarjetasAbiertas = 0;

    //imprimir aciertos
    aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

    if(aciertos == 8){
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 💡`;
        mostrarMovimientos.innerHTML = `Movimientos : ${movimientos} 😊`;
        mostrarTiempo.innerHTML = `Completarlo te tomo: ${tiempoFinal}`;
    }
    } else {
        //mostrar en segundos los valores
        setTimeout(()=>{
            tarjeta1.innerHTML = ' ';
            tarjeta2.innerHTML = ' ';
            tarjeta1.disabled = false;
            tarjeta2.disabled = false;
            tarjetasAbiertas = 0;
            },200);
        }
    }
}


