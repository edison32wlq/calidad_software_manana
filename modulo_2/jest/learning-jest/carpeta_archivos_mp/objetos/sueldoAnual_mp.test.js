const { costoAnual } = require('./sueldoAnual_mp');

describe('costoAnual (Inventario TECH)', () => {

    test('Happy path: costo mensual 500 → costo anual 6000', () => {
        expect(
            costoAnual({
                nombre: 'Laptop Gamer',
                costoMensual: 500
            })
        ).toBe(6000);
    });

    test('Sad path: producto / costo invalido', () => {
        expect(() => costoAnual({ costoMensual: -1 })).toThrow('costo mensual invalido');
        expect(() => costoAnual(null)).toThrow('producto invalido');
    });

});
