//Código Cuadrado


// console.log("El lado del cuadrado mide: " + ladoCuadrado + " cm");
// const perimetroCuadrado = ladoCuadrado * 4; 
// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");
// const areaCuadrado = ladoCuadrado * ladoCuadrado; 
// console.log("El área del cuadrado es de: " + areaCuadrado + " cm2");   

console.group("Cuadrados"); 

function perimetroCuadrado(lado){
    return lado * 4; 
}
function areaCuadrado(lado){
    return lado * lado; 
}
console.groupEnd();

//Código Triángulo
console.group("Triangulos"); 
function alturaTrianguloIsoceles(lado1, lado2, lado3){
    if(lado1 == lado2){
        const area1 = Math.sqrt((lado1*lado1)-((lado3*lado3)/4));
        return area1; 
    }else if(lado2 === lado3){
        const area2 = Math.sqrt((lado2*lado2)-((lado1*lado1)/4));
        return area2; 
    }else if(lado3 === lado1){
        const area3 = Math.sqrt((lado3*lado3)-((lado2*lado2)/4));
        return area3;  
    }else{
        alert("Parece que tu triangulo no es isoceles..."); 
    }
    
}

function semiperimetro(ladoTriangulo1, ladoTriangulo2 ,trianguloBase){
    return ((ladoTriangulo1 + ladoTriangulo2 + trianguloBase)/2);  
}

function areaTriangulo(semiperimetro, ladoTriangulo1, ladoTriangulo2, trianguloBase){ 
    return  Math.sqrt(semiperimetro*(semiperimetro - ladoTriangulo1)*(semiperimetro - ladoTriangulo2)* (semiperimetro - trianguloBase)); 
}
console.groupEnd(); 
//Código Circulo
console.group("Circulo"); 

function diametroCirculo(radioCirculo){
    return radioCirculo *2; 
}
function perimetroCirculo(diametroCirculo){
    const PI = Math.PI; 
    return Math.round(diametroCirculo * PI);
}
 


console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado"); 
    const value = input.value; 
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es igual a: " + perimetro);  

}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado"); 
    const value = input.value; 
    const area = areaCuadrado(value);
    alert("El área es igual a: " + area);  
}
function calcularAlturaIsoceles(){
    const input1 = document.getElementById("inputTriangulo1"); 
    const input2 = document.getElementById("inputTriangulo2"); 
    const input3 = document.getElementById("inputTriangulo3"); 
    const value1 = input1.value; 
    const value2 = input2.value; 
    const value3 = input3.value; 
    const altura = alturaTrianguloIsoceles(value1, value2, value3)
    alert ("La altura es: " + altura); 
}

function calcularDiametroCirculo(){
    const inputC = document.getElementById("inputCirculo1"); 
    const valueC = inputC.value; 
    const perimetroC  = valueC*2; 
    alert("El perimetro es de: " + perimetroC);  
}
function calcularAreaCirculo(){
    const PI = Math.PI; 
    const inputC = document.getElementById("inputCirculo1"); 
    const valueC = inputC.value; 
    const areaC = Math.round((valueC * valueC) * PI);
    alert("El area es de: " + areaC);  
}
function calcularPerimetroCirculo(){
    const PI = Math.PI; 
    const inputC = document.getElementById("inputCirculo1"); 
    const valueC = inputC.value; 
    const diametroC =  Math.round(valueC * PI);
    alert("El perimetro es de: " + diametroC);  
}