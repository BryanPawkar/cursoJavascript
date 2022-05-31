const lista = [
    17,
    25,
    53,
    59,
]
const lista1 = [
    53, 
    23, 
    12,
    7, 
    57,
    36, 
]; 
const lista2 =[
    14, 
    25, 
    26, 
    37, 
    75,
]; 



function esPar(list){
    list.sort(); 
    const num = parseInt(list.length/2);     
    if(list.length % 2 == 0){
        const media = (list[num] + list[num-1])/2; 
        return media; 
    }else{
        return list[num]; 
    }
}