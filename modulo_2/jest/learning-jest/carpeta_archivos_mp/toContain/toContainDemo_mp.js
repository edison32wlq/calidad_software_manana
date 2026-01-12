function obtenerProductos() {
    return ['teclado', 'mouse', 'laptop', 'monitor'];
}

function contienePalabra(texto, palabra) {
    if (typeof texto !== 'string' || typeof palabra !== 'string')
        throw new TypeError('Ambos argumentos deben ser strings');

    return texto.toLowerCase()
        .includes(palabra.toLowerCase());
}

function agregarElemento(lista, elemento) {
    if (!Array.isArray(lista))
        throw new TypeError('lista debe ser array');

    if (!elemento)
        throw new TypeError('elemento no puede ser vacio');

    lista.push(elemento);
    return lista;
}

module.exports = { obtenerProductos, contienePalabra, agregarElemento };
