function actualizarStock(stockActual,movimiento){
    if(!Number.isInteger(stockActual))
        throw new TypeError('stock invalido');

    if(stockActual <= 0)
        throw new TypeError('stock insuficiente');

    if(!Number.isInteger(movimiento))
        throw new TypeError('movimiento invalido');

    resultado = stockActual + (movimiento);
    
    if(resultado < 0)
        throw new TypeError('stock insuficiente');


    stockActual = resultado;

    return {stockActual, movimiento};

}

module.exports = { actualizarStock };