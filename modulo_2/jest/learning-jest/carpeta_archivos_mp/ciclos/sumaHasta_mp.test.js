const { sumarUnidadesHasta } = require('./sumaHasta_mp');

describe('sumarUnidadesHasta (Inventario TECH)', () => {

    test('Happy path: lote 5 → total unidades 15', () => {
        expect(sumarUnidadesHasta(5)).toBe(15);
    });

    test('Happy path: lote 1 → total unidades 1', () => {
        expect(sumarUnidadesHasta(1)).toBe(1);
    });

    test('Sad path: lote invalido', () => {
        expect(() => sumarUnidadesHasta(0)).toThrow('lote invalido');
        expect(() => sumarUnidadesHasta('10')).toThrow('lote invalido');
        expect(() => sumarUnidadesHasta(2.5)).toThrow('lote invalido');
    });
});
