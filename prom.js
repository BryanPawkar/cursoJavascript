const  lista1= [
    12, 
    23, 
    51, 
    23, 
    5, 
    52, 
    6,
];
const lista2 = [
    45, 
    523, 
    11, 
    64, 
    75, 
    92, 
];
const lista3 = [
    24, 
    32, 
    52, 
    24, 
    32,
    32,
    24, 
    51, 
    24, 
    51, 
    24, 
]; 

//PROMEDIO

function calcularPromedio(lista){

    let suma = lista.reduce(
        function(num, acc){
            return num+acc; 
        }
    );

    let promedio = suma / lista.length; 
    return promedio; 
}

//MEDIA

function calcularMedia(lista){

    lista.sort(); 

    if(lista.length%2 === 0){
        const medio = lista.length/2; 
        const media1 = (lista[medio] + lista[medio-1])/2;
        return media1; 
    }else{
        const media2 = parseInt(lista.length/2); 
        const media3 = lista[media2]; 
        return media3; 
    }
}; 

//MODA

const contador = {}; 
function ordenarArray(lista){
    lista.map(
        function(elemento){
            if(contador[elemento]){
                contador[elemento] += 1; 
            }else{
                contador[elemento] = 1; 
            }
        }
    );
    return contador;
    entregarModa(); 
}
function entregarModa(){
    const lista1Array = Object.entries(contador).sort(
    function(num, acc){
            return num[1]-acc[1]; 
    }
);
const moda = lista1Array[lista1Array.length - 1]; 
return moda;

}

