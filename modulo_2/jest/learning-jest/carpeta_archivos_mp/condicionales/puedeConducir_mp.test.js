const { puedeVenderse } = require('./puedeConducir_mp');

describe('puedeVenderse (Inventario TECH)', () => {

    test('Happy path: stock 20 → Si puede venderse', () => {
        expect(puedeVenderse(20)).toBe('Si');
    });

    test('Happy path: stock 0 → No puede venderse', () => {
        expect(puedeVenderse(0)).toBe('No');
    });

    test('Sad path: stock invalido', () => {
        expect(() => puedeVenderse(-1)).toThrow('stock invalido');
        expect(() => puedeVenderse('19')).toThrow('stock invalido');
    });
});
