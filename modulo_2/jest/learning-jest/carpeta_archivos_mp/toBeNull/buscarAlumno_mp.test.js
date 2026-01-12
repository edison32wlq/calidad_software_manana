const { buscarProducto, leerProp } = require('./buscarAlumno_mp');

describe('Null / Undefined / Defined (Inventario TECH)', () => {
    test('Happy path: buscarProducto devuelve objeto o null', () => {
        const lista = [
            { nombre: 'Teclado', id: 1 },
            { nombre: 'Mouse', id: 2 }
        ];

        expect(buscarProducto(lista, 'Teclado')).toEqual({ nombre: 'Teclado', id: 1 });
        expect(buscarProducto(lista, 'NoExiste')).toBeNull();
    });

    test('Happy path: leerProp puede ser defined o undefined', ()  => {
        const obj = { a: 1, b: undefined };

        expect(leerProp(obj, 'a')).toBeDefined();
        expect(leerProp(obj, 'b')).toBeUndefined();
        expect(leerProp(obj, 'c')).toBeUndefined();
    });

    test('Sad path: parámetros inválidos', () => {
        expect(() => buscarProducto('no array', 'Teclado')).toThrow('productos debe ser array');
        expect(() => buscarProducto([], '')).toThrow('nombre invalido');
        expect(() => leerProp(null, 'a')).toThrow('obj invalido');
        expect(() => leerProp({}, 123)).toThrow('prop invalida');
    });
});
