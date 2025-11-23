function stockMaximoTech(arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length == 0)
        throw new TypeError("inventario invalido");
    
    return Math.max(...arreglo);
}

module.exports = { stockMaximoTech };
