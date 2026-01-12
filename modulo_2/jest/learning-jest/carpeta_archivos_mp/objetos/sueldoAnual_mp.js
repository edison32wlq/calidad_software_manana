function costoAnual(producto) {
    if (!producto || typeof producto !== 'object') {
        throw new TypeError("producto invalido");
    }

    const { costoMensual } = producto;

    if (
        !costoMensual ||
        typeof costoMensual !== 'number' ||
        costoMensual < 0
    ) {
        throw new TypeError("costo mensual invalido");
    }

    return costoMensual * 12;
}

module.exports = { costoAnual };
