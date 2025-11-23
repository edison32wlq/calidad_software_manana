function sumarUnidadesHasta(lote) {
    if (
        typeof lote !== 'number' ||
        Number.isNaN(lote) ||
        !Number.isInteger(lote) ||
        lote < 1
    ) {
        throw new TypeError("lote invalido");
    }

    let total = 0;
    for (let i = 1; i <= lote; i++) {
        total += i;
    }
    return total;
}

module.exports = { sumarUnidadesHasta };
