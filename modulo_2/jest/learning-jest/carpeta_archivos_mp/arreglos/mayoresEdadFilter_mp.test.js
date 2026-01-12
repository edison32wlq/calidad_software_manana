const { stockSuficienteFiltro } = require('./mayoresEdadFilter_mp');

describe('Stock suficiente en Inventario TECH', () => {

    test('Happy path: [5,10,26,28] → [10,26,28]', () => {
        expect(stockSuficienteFiltro([5,10,26,28])).toEqual([10,26,28]);
    });

    test('Happy path: []', () => {
        expect(stockSuficienteFiltro([])).toEqual([]);
    });

    test('Sad path: inventario invalido', () => {
        expect(() => stockSuficienteFiltro('arreglo')).toThrow('inventario invalido');
    });
});
