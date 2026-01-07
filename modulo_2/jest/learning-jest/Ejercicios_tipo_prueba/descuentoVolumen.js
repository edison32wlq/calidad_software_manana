function calcularPrecioPorVolumen(cantidad, precioUnitario){
    //0- 10 <= 0 porciento
    //11-  30 - 5 porciento
    //31 -  10 porciento

    if(!Number.isInteger(cantidad) || cantidad < 0)
        throw new TypeError('datos invalidos');

    if(typeof precioUnitario !== 'number' || precioUnitario < 0)
        throw new TypeError('datos invalidos');

    let descuento = 0;
    let total = cantidad * precioUnitario;

    if(cantidad >= 0 && cantidad <= 10){
        descuento = 0;
    }else if(cantidad >= 11 && cantidad <= 30){
        descuento = 0.05 * total;
    } else{
        descuento = 0.1 * total;
    }

    return (total - descuento);

}

module.exports = { calcularPrecioPorVolumen }