function estadoStock(stock) {
    if (
        typeof stock !== 'number' ||
        Number.isNaN(stock) ||
        stock > 100 ||
        stock < 0
    ) {
        throw new TypeError("stock invalido");
    }

    if (stock >= 50) return 'Stock Alto';
    if (stock >= 20) return 'Stock Medio';
    return 'Stock Bajo';
}

module.exports = { estadoStock };
