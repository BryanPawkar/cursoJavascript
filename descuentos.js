
const coupons = [
    {
        name: "tenFree_monday",
        discount: 10, 
    }, 
    {
        name: "fifthyFree_sunday",
        discount: 50, 
    },
    {
        name: "free_monday",
        discount: 99, 
    },
]; 

function calcularPrecio(precio, descuento){
    const precioCon = precio - (precio*descuento)/100; 
    return precioCon; 
}

function siCalcularPrecio(){
    const montoCliente = document.getElementById("monto"); 
    const montoValue = montoCliente.value; 
    const descuentoCliente = document.getElementById("descuento");
    const descuentoValue = descuentoCliente.value; 
    const coupon = document.getElementById("tipoCupon"); 
    const couponValue = coupon.value; 

    if(!couponValue){
        const precioConDes = calcularPrecio(montoValue, descuentoValue);
        const textP = document.getElementById("ResultP");  
        textP.innerText = "El precio con descuento es de: $" + precioConDes; 
    }else{
        const isCouponValid = function(coupon){
            return coupon.name === couponValue; 
        }
    
        const userCoupon = coupons.find(isCouponValid);
    
    
        if(!userCoupon){
            textP.innerText = "El cupon ingresado no existe!"; 
            }else {
            const descuento = userCoupon.discount;
    
            const calcularDescuento = calcularPrecio(montoValue, descuento);
    
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con descuento es de $ " + calcularDescuento; 
        }
    }

}





