function stockSuficienteFiltro(arreglo) {
    if (!Array.isArray(arreglo))
        throw new TypeError("inventario invalido");

    return arreglo.filter(cantidad => cantidad >= 10);
}

module.exports = { stockSuficienteFiltro };
