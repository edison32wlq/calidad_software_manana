function actualizarStock(producto, stock) {
    if (!producto || !typeof producto == 'object') {
        throw new TypeError("producto invalido");
    }

    if (!Number.isInteger(stock) || stock < 0) {
        throw new TypeError("stock invalido");
    }

    producto.stock = stock;
    return producto;
}

module.exports = { actualizarStock };
