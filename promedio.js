const lista = [
    100, 
    230,
    234,
    754, 
    974, 
    687, 
]; 

const lista1 = [
    934, 
    964,
    163, 
    643, 
    834,
    970,
];
const lista2 = [
    93, 
    96,
    16, 
    11, 
    83,
    97,
];


function calcularPromedio(list){
    // let contador = 0; 
    // for(let i =0; i<list.length; i++){
    //     contador = contador + list[i]; 
    // }
    const sumaFinal = list.reduce(
        function(acc = 0, nwe){
            return acc + nwe; 
        }
    );
    const promedioFinal = sumaFinal / (list.length); 
    return promedioFinal; 
}