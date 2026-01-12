function enMayusculasProducto(nombre) {
    if (!nombre || typeof nombre !== 'string') {
        throw new TypeError("nombre invalido");
    }
    return nombre.toUpperCase();
}

module.exports = { enMayusculasProducto };
