const { inventarioTech } = require('./edad_mp');

describe('inventarioTech', () => {
    test('Happy path: [5, 12, 20, 3]', () => {
        expect(inventarioTech([5, 12, 20, 3])).toEqual([12, 20]);
    });

    test('Sad path: inventario invalido', () => {
        expect(() => inventarioTech([])).toThrow('inventario invalido');
        expect(() => inventarioTech('teclado')).toThrow('inventario invalido');
        expect(() => inventarioTech([-5, 1])).toThrow('cantidad inválida en el inventario');
    });
});
