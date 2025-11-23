const { crearProductoTech } = require('./crearEstudiante_mp');

describe('Crear Producto TECH', () => {

    test('Happy path:', () => {
        expect(crearProductoTech('teclado', 17)).toEqual({
            nombre: 'teclado',
            stock: 17
        });
    });

    test('Sad path: nombre / stock invalidos', () => {
        expect(() => crearProductoTech('', 20)).toThrow('nombre invalido');
        expect(() => crearProductoTech('Mouse', -1)).toThrow('stock invalido');
    });

});
