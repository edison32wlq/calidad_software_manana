function contarPalabrasProducto(descripcion) {
    if (!descripcion || typeof descripcion !== 'string') {
        throw new TypeError("descripcion inválida");
    }

    const descripcionTrimmed = descripcion.trim();

    if (descripcionTrimmed === '')
        throw new TypeError("descripcion inválida");

    return descripcionTrimmed.split(/\s+/).length;
}

module.exports = { contarPalabrasProducto };
