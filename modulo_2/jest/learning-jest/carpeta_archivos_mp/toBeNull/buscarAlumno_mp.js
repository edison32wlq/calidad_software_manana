function buscarProducto(productos, nombre) {
    if (!Array.isArray(productos))
        throw new TypeError('productos debe ser array');

    if (typeof nombre !== 'string' || !nombre.trim())
        throw new TypeError('nombre invalido');

    const found = productos.find(p => p?.nombre === nombre.trim());
    return found ?? null;
}

function leerProp(obj, prop) {
    if (!obj || typeof obj !== 'object')
        throw new TypeError('obj invalido');

    if (typeof prop !== 'string' || !prop)
        throw new TypeError('prop invalida');

    return obj[prop];
}

module.exports = { buscarProducto, leerProp };
