function calcularTotalCafeteria1(items, ivaPorcentaje){
    if(!Array.isArray(items))
        throw new TypeError('item invalido');

    if(!Number.isInteger(ivaPorcentaje) || ivaPorcentaje < 0 || ivaPorcentaje >100)
        throw new TypeError('iva invalido');

    items.forEach( (item, i) =>{
        if(typeof item.nombre !== 'string' || item.nombre.trim() == '')
            throw new TypeError('item invalido');

        if(typeof item.precioUnitario !== 'number' || item.precioUnitario < 0)
            throw new TypeError('item invalido');

        if(!Number.isInteger(item.cantidad) || item.cantidad < 0)
            throw new TypeError('item invalido');

    });

    let subtotal = 0 ;

    for(let item of items){
        subtotal = subtotal + (item.precioUnitario * item.cantidad)
        //subtotal += item.precioUnitario * item.cantidad;
    }

    // 10/100 = 0.1
    let iva = (ivaPorcentaje/100) * subtotal;
    
    return subtotal + iva;

}

module.exports = { calcularTotalCafeteria1};