const ecuador = []; 
ecuador.push({
    nombre: "Emily", 
    salario: 600
});
ecuador.push({
    nombre: "Diego", 
    salario: 670
});
ecuador.push({
    nombre: "Camila", 
    salario: 680
});
ecuador.push({
    nombre: "Ana", 
    salario: 750
});
ecuador.push({
    nombre: "Octavio", 
    salario: 550
});
ecuador.push({
    nombre: "Kevin", 
    salario: 700
});
ecuador.push({
    nombre: "Viviana", 
    salario: 200
});
ecuador.push({
    nombre: "Martha", 
    salario: 5000
});
ecuador.push({
    nombre: "Pedro", 
    salario: 1250
});
ecuador.push({
    nombre: "David", 
    salario: 850
});
ecuador.push({
    nombre: "Fabian", 
    salario: 1000
});
ecuador.push({
    nombre: "Jose", 
    salario: 1200
});
ecuador.push({
    nombre: "Nicole", 
    salario: 800
});
ecuador.push({
    nombre: "Dennise", 
    salario: 3000
});
ecuador.push({
    nombre: "Braco", 
    salario: 1100
});
ecuador.push({
    nombre: "Indira", 
    salario: 900
});
ecuador.push({
    nombre: "Roberto", 
    salario: 450
});
ecuador.push({
    nombre: "Andrea", 
    salario: 500
});
ecuador.push({
    nombre: "Ryta", 
    salario: 300
});
ecuador.push({
    nombre: "Rene", 
    salario: 800
});
ecuador.push({
    nombre: "Andres", 
    salario: 2000
});
ecuador.push({
    nombre: "Francisco", 
    salario: 1500
});

ecuador.push({
    nombre: "Fabian", 
    salario: 1000
});
ecuador.push({
    nombre: "Jose", 
    salario: 1200
});
ecuador.push({
    nombre: "Nicole", 
    salario: 800
});
ecuador.push({
    nombre: "Dennise", 
    salario: 3000
});
ecuador.push({
    nombre: "Braco", 
    salario: 1100
});
ecuador.push({
    nombre: "Indira", 
    salario: 900
});
ecuador.push({
    nombre: "Roberto", 
    salario: 450
});
ecuador.push({
    nombre: "Andrea", 
    salario: 10000
});



function calcularMedia(lista){
    const salarios = lista.map(
        function(elemento){
            return elemento.salario; 
        }
    );
    const salariosOrdenados = salarios.sort(
        function(a, b){
            return a-b; 
        }
    );
    function esPar(numero){
        return (numero % 2 === 0); 
    }
    const mitad = parseInt(salariosOrdenados.length/2); 

    if(esPar(lista.length)){
        const media = (salariosOrdenados[mitad] + salariosOrdenados[mitad-1])/2;
        return media;  
    }else{
        const media1 = salariosOrdenados[mitad]; 
        return media1; 
    }
};
const top10Salarios = []; 
function calcularMediaTop(lista){
    debugger
    const salarios = lista.map(
        function(elemento){
            return elemento.salario; 
        }
    );
    const salariosOrdenados = salarios.sort(
        function(a, b){
            return a-b; 
        }
    );
    const spliceStar = (salarios.length*90)/100; 
    const spliceEnd = salarios.length - spliceStar; 
    const top10Salarios = salarios.splice(spliceStar, spliceEnd);
    function salariosPar(numero){
        return (numero %2 === 0); 
    }
    const mitad10 = parseInt((top10Salarios.length)/2);
    if(salariosPar(top10Salarios.length) && top10Salarios.length >2){
        return ((top10Salarios[mitad10]+ top10Salarios[mitad10-1])/2); 
    }else if(salariosPar(top10Salarios.length) && top10Salarios.length <= 2){
        return ((top10Salarios[0]+ top10Salarios[1])/2);
    } else{
        return (top10Salarios[mitad10]); 
    }
}
