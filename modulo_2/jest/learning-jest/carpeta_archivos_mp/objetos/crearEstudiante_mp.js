function crearProductoTech(nombre, stock) {
    if (!typeof nombre == 'string' || !nombre.trim())
        throw new TypeError("nombre invalido");

    if (!Number.isInteger(stock) || stock < 0)
        throw new TypeError("stock invalido");

    return { nombre: nombre.trim(), stock };
}

module.exports = { crearProductoTech };
