function inventarioTech(arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length === 0)
        throw new TypeError("inventario invalido");
    
    for (let cantidad of arreglo) {
        if (typeof cantidad !== 'number' || !Number.isInteger(cantidad) || cantidad < 0) {
            throw new TypeError("cantidad inválida en el inventario");
        }
    }

    let stockSuficiente = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] >= 10) {
            stockSuficiente.push(arreglo[i]);
        }
    }
    return stockSuficiente;
}

module.exports = { inventarioTech };
