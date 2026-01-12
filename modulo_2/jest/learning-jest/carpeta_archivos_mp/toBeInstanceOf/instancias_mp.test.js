const { Producto, crearProducto, esFecha } = require('./instancias_mp');

describe('InstanceOf (Inventario TECH)', () => {

    test('Happy: crearProducto retorna instancia de Producto TECH', () => {
        const p = crearProducto('Laptop Gamer', 22);
        expect(p).toBeInstanceOf(Producto);
        expect(p).not.toBeInstanceOf(Date);
    });

    test('Happy: esFecha detecta instancias Date válidas e inválidas', () => {
        expect(esFecha(new Date())).toBe(true);
        expect(esFecha(new Date('invalid'))).toBe(false);
    });

    test('Sad: crearProducto con datos invalidos', () => {
        expect(() => crearProducto('', 10)).toThrow('nombre invalido');
        expect(() => crearProducto('Monitor', -1)).toThrow('stock invalido');
        expect(esFecha('2025-01-01')).toBe(false);
    });

});
