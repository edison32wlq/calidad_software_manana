function puedeVenderse(stock) {
    if (!Number.isInteger(stock) || stock < 0)
        throw new TypeError("stock invalido");

    return stock >= 1 ? 'Si' : 'No';
}

module.exports = { puedeVenderse };
