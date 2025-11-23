class Producto {
    constructor (nombre, stock) {
        if (typeof nombre !== 'string' || !nombre.trim())
            throw new TypeError('nombre invalido');

        if (!Number.isInteger(stock) || stock < 0)
            throw new TypeError('stock invalido');

        this.nombre = nombre.trim();
        this.stock = stock;
    }
}

function crearProducto(nombre, stock) {
    return new Producto(nombre, stock);
}

function esFecha(valor) {
    return valor instanceof Date && !isNaN(valor.valueOf());
}

module.exports = { Producto, crearProducto, esFecha };
