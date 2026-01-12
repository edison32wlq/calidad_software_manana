function stockEsPar(cantidad) {
    if (!Number.isInteger(cantidad))
        throw new TypeError("cantidad debe ser entera");

    return cantidad % 2 === 0;
}

module.exports = { stockEsPar };
