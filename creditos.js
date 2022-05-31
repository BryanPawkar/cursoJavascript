const notas = [
    {
    curso: "fisica",
    nota: 8, 
    creditos: 4,
    },
    {
    curso: "matematicas",
    nota: 7, 
    creditos: 6, 
    },
    {
    curso: "informatica", 
    nota: 9, 
    creditos: 8, 
    },   
];
function calcularPromedioPonderado(objetoDeNotas){
    const notasYCreditos = objetoDeNotas.map(
        function(elemento){
            return elemento.nota * elemento.creditos; 
        }
    );
    const sumaDeNotasYCreditos = notasYCreditos.reduce(
        function(num = 0, acc){
            return num + acc; 
        }
    );
    const creditos = objetoDeNotas.map(
        function(elemento){
            return elemento.creditos; 
        }
    ); 
    const sumaCreditos = creditos.reduce(
        function(num = 0, acc){
            return num+acc; 
        }
    );
    return sumaDeNotasYCreditos/sumaCreditos; 

}