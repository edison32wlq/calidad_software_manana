const { stockMaximoTech } = require('./maximo_con_math_mp');

describe('Máximo stock del Inventario TECH', () => {

    test('Happy path: [4, 9, 2, 10]', () => {
        expect(stockMaximoTech([4, 9, 2, 10])).toBe(10);
    });

    test('Happy path: [-5, -1]', () => {
        expect(stockMaximoTech([-5, -1])).toBe(-1);
    });

    test('Sad path: inventario invalido', () => {
        expect(() => stockMaximoTech([])).toThrow('inventario invalido');
        expect(() => stockMaximoTech('teclado')).toThrow('inventario invalido');
    });
});
