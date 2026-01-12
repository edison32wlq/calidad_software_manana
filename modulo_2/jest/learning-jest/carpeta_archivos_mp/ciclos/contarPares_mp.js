function contarStockPar(arreglo) {
    if (!Array.isArray(arreglo)) {
        throw new TypeError("inventario invalido");
    }

    let contador = 0;
    for (let cantidad of arreglo) {
        if (cantidad % 2 === 0) contador++;
    }
    return contador;
}

module.exports = { contarStockPar };
