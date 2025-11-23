const { contarStockPar } = require('./contarPares_mp');

describe('contarStockPar (Inventario TECH)', () => {

    test('Happy path: [1,2,3,4,6] → 3 productos con stock par', () => {
        expect(contarStockPar([1,2,3,4,6])).toBe(3);
    });

    test('Happy path: [] es 0', () => {
        expect(contarStockPar([])).toBe(0);
    });

    test('Sad path: inventario invalido', () => {
        expect(() => contarStockPar('no array')).toThrow('inventario invalido');
    });
});
