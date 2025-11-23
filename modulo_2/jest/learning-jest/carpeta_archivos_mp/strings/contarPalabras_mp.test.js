const { contarPalabrasProducto } = require('./contarPalabras_mp');

describe('Contar Palabras de un Producto TECH', () => {

    test('Happy path: "Teclado Mecánico RGB" → 3 palabras', () => {
        const response = contarPalabrasProducto('Teclado Mecánico RGB');
        expect(response).toBe(3);
    });

    test('Sad path: ERROR', () => {
        expect(() => contarPalabrasProducto(null)).toThrow('descripcion inválida');
        expect(() => contarPalabrasProducto('')).toThrow('descripcion inválida');
    });

});
