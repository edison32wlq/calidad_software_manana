const { obtenerProductos, contienePalabra, agregarElemento } = require('./toContainDemo_mp');

describe('toContain Matcher (Inventario TECH)', () => {

    test('Happy path: elemento dentro de array', () => {
        const productos = obtenerProductos();
        expect(productos).toContain('mouse');
    });

    test('Happy path: palabra dentro de texto', () => {
        const response = contienePalabra('El teclado es nuevo', 'teclado');
        expect(response).toBe(true);
    });

    test('Sad path: elemento no encontrado', () => {
        const productos = obtenerProductos();
        expect(productos).not.toContain('impresora');
    });

    test('Sad path: argumentos invalidos para contienePalabra', () => {
        expect(() => contienePalabra(123, 'mouse'))
            .toThrow('Ambos argumentos deben ser strings');

        expect(() => contienePalabra('hola', null))
            .toThrow('Ambos argumentos deben ser strings');
    });

    test('Sad path: agregarElemento con lista inválida', () => {
        expect(() => agregarElemento({}, 'x'))
            .toThrow('lista debe ser array');
    });

    test('Sad path: agregarElemento con elemento vacío', () => {
        expect(() => agregarElemento([], ''))
            .toThrow('elemento no puede ser vacio');
    });

});
