const { stockEsPar } = require('./esPar_mp');

describe('stockEsPar (Inventario TECH)', () => {

    test('Happy path: 8 unidades → par', () => {
        expect(stockEsPar(8)).toBe(true);
    });

    test('Happy path: 7 unidades → no par', () => {
        expect(stockEsPar(7)).toBe(false);
    });

    test('Sad path: cantidad no entera', () => {
        expect(() => stockEsPar(3.5)).toThrow('cantidad debe ser entera');
        expect(() => stockEsPar('10')).toThrow('cantidad debe ser entera');
    });
});
