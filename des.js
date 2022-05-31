
const cupones = [
    {
        name: "descuento_diez",
        porcentaje: 10, 
    },
    {
        name: "descuento_cincuenta",
        porcentaje: 50, 
    }, 
    {
        name: "descuento_treinta",
        porcentaje: 30, 
    }, 
]; 

function precioConDescuento(valor, desc){
    const nuevoPrecio = (valor - (valor*desc)/100); 
    return nuevoPrecio; 
}

function calcularDescuento(){
    const userValue = document.getElementById("monto");
    const monto = userValue.value; 
    const userDescount = document.getElementById("descuento");
    const descuento = userDescount.value; 
    const userCoupon = document.getElementById("cupon");
    const cupon = userCoupon.value; 
    const userResult = document.getElementById("resultado");  

    if(!cupon){
        const descuentoManual = precioConDescuento(monto, descuento);
        userResult.innerText= "El precio con descuento es de $" + descuentoManual;  
    }else{
        const validarCupon = function(cuponN){
            return cuponN.name === cupon; 
        }

        const cuponUsado = cupones.find(validarCupon); 

        if(!cuponUsado){
            
            userResult.innerText = "El cupón ingresado no existe!" 
        }else{
            const porcentajeDes = cuponUsado.porcentaje; 
            const precioCupon = precioConDescuento(monto, porcentajeDes);
            const sinCupon = document.getElementById("resultado");
            sinCupon.innerText = "El precio utilizando el cupón es de $" + precioCupon; 
        }


    }
} 