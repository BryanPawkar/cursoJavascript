const ingresosValue = document.getElementById("ingresos");
const kmValue = document.getElementById("km");
const horasValue = document.getElementById("horas");   
const resultado = document.getElementById("resultado"); 
const resultado1 = document.getElementById("resultado1"); 
const resultado2 = document.getElementById("resultado2"); 
const resultado3 = document.getElementById("resultado3"); 
const jornada = document.getElementById("jornada"); 
const jornada1 = document.getElementById("jornada1"); 
const imagen = document.getElementById("imagen"); 

function calcularGasolina(gas){
    return (gas*2.55)/60; 
}
function costoDeHora(nHoras, generado){
    return generado/nHoras; 
}
function calcularValor(){
    const ingresos = ingresosValue.value; 
    const kilometros = kmValue.value; 
    const horas = horasValue.value; 
    const precioGas = calcularGasolina(kilometros);
    const ganancia = (ingresos - precioGas); 
    resultado.innerText = "Tu ganancia neta es de $" + ganancia.toFixed(2) + ".";
    resultado1.innerText = "Has gastado $" + precioGas.toFixed(2) + " en combustible durante este periodo.";  
    const valorHora = costoDeHora(horas, ganancia);
    resultado2.innerText = "En promedio has generado $" + valorHora.toFixed(2) + " la hora, y has trabajado " + horas + " hora/s."; 
    if(precioGas > (ganancia*50)/100){
        jornada.innerText = "¡Pésimo!"
        jornada1.innerText = "...estás gastando demasiado en combustible! trata de manejar en zonas más concurridas..."
        imagen.src = "/img/homero rico.jpg"; 
    }else if(valorHora < 4){
        jornada.innerText = "¡Pérdida de tiempo!"
        jornada1.innerText = "...estás ganando muy poco la hora, trata de aceptar viajes más cercanos a tu ubicación y que el destino sea más lejano..."
        imagen.src = "/img/homero pobre.jpg"; 
    }else if(precioGas <= (ganancia*0.15)){
        jornada.innerText = "¡Excelente!"
        jornada1.innerText = "...lo estás haciendo mejor que el 99%! ¡Sigue Así!"
        imagen.src = "/img/burns.jpg"; 
    }else{
        jornada.innerText = "¡Bien!"
        jornada1.innerText = "...lo estás haciendo igual que el promedio, puedes mejorar..."
        imagen.src = "/img/homero.jpg"; 
    }
}
