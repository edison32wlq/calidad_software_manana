const { promedioStock } = require('./promedio_mp');

describe('Promedio de stock en Inventario TECH', () => {

    test('Happy path: [3,5,1] promedio 3', () => {
        expect(promedioStock([3,5,1])).toEqual(3);
    });

    test('Sad path: inventario invalido', () => {
        expect(() => promedioStock('arreglo')).toThrow('inventario invalido');
    });
});
