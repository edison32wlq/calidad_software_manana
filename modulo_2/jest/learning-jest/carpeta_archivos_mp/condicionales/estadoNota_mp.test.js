const { estadoStock } = require('./estadoNota_mp');

describe('estadoStock (Inventario TECH)', () => {

    test('Happy path: 80 → Stock Alto', () => {
        expect(estadoStock(80)).toBe('Stock Alto');
    });

    test('Happy path: 30 → Stock Medio y 10 → Stock Bajo', () => {
        expect(estadoStock(30)).toBe('Stock Medio');
        expect(estadoStock(10)).toBe('Stock Bajo');
    });

    test('Sad path: stock invalido', () => {
        expect(() => estadoStock(-1)).toThrow('stock invalido');
        expect(() => estadoStock('10')).toThrow('stock invalido');
        expect(() => estadoStock(200)).toThrow('stock invalido');
    });
});
