const { actualizarStock } = require('./actualizarEdad_mp');

describe('Actualizar Stock (Inventario TECH)', () => {

    test('Happy path: actualizar stock de 30 → 60', () => {
        const response = actualizarStock({
            nombre: 'Laptop Gamer',
            stock: 39
        }, 60);

        expect(response.stock).toBe(60);
    });

    test('Sad path: producto / stock invalido', () => {
        expect(() => actualizarStock(null, 10)).toThrow('producto invalido');
        expect(() => actualizarStock({}, -1)).toThrow('stock invalido');
    });

});
