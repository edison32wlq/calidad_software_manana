function crearProducto(nombre, categoria) {
    if (typeof nombre !== 'string' || typeof categoria !== 'string') {
        throw new TypeError('nombre y categoria deben ser strings');
    }

    return {
        nombre,
        categoria,
        disponible: true,
        creadoEn: new Date().toISOString()
    };
}

function obtenerFicha(producto) {
    if (!producto || typeof producto !== 'object')
        throw new TypeError('producto invalido');

    const { nombre, categoria, disponible } = producto;
    return { nombre, categoria, disponible };
}

function compararProductos(p1, p2) {
    if (!p1 || !p2) throw new TypeError('productos invalidos');

    return p1.categoria === p2.categoria && p1.disponible === p2.disponible;
}

module.exports = {
    crearProducto,
    obtenerFicha,
    compararProductos
};
