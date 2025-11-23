const { enMayusculasProducto } = require("./enMayusculas_mp");

describe('En Mayusculas Producto (Inventario TECH)', () => {

    test('Happy path: TECLADO', () => {
        const response = enMayusculasProducto('teclado');
        expect(response).toBe('TECLADO');
    });

    test('Sad path: ERROR', () => {
        expect(() => enMayusculasProducto(null)).toThrow('nombre invalido');
        expect(() => enMayusculasProducto(123)).toThrow('nombre invalido');
    });

});
