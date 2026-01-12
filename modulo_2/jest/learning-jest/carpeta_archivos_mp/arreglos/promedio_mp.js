function promedioStock(arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length == 0)
        throw new TypeError("inventario invalido");

    let total = 0;
    let p = 0;

    while (arreglo.length > p) {
        total += arreglo[p];
        p++;
    }

    const promedioFinal = total / arreglo.length;
    return promedioFinal;
}

module.exports = { promedioStock };
