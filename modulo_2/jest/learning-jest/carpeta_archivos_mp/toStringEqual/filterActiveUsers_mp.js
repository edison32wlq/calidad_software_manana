function filterActiveProducts(productos) {
    return productos.filter(producto => producto.activo);
}

module.exports = { filterActiveProducts };
