function validarObjeto(obj, nombre) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        throw new TypeError(`${nombre} debe ser objeto`);
    }
}

function deepMerge(objeto1, objeto2) {
    validarObjeto(objeto1, 'a');
    validarObjeto(objeto2, 'b');

    const salida = { ...objeto1 };

    for (const [k, v] of Object.entries(objeto2)) {
        if (
            v && typeof v === 'object' &&
            !Array.isArray(v) &&
            salida[k] && typeof salida[k] === 'object' &&
            !Array.isArray(salida[k])
        ) {
            salida[k] = { ...salida[k], ...v };
        } else {
            salida[k] = v;
        }
    }

    return salida;
}

function normalizarProducto(producto) {
    validarObjeto(producto, 'producto');

    const { nombre, precios } = producto;

    if (typeof nombre !== 'string' || !Array.isArray(precios)) {
        throw new TypeError(
            'producto.nombre debe ser string y ' +
            'producto.precios debe ser array'
        );
    }

    const valid = precios.every(p => typeof p === 'number' && !Number.isNaN(p));
    if (!valid) throw new TypeError('precios debe contener un número válido');

    const promedio =
        precios.length
            ? precios.reduce((a, b) => a + b, 0) / precios.length
            : 0;

    return {
        nombre: nombre.trim(),
        precios,
        promedio
    };
}

module.exports = { deepMerge, normalizarProducto };
