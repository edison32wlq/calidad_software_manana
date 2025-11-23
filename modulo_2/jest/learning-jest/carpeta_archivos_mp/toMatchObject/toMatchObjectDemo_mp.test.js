const { crearProducto,
    obtenerFicha, compararProductos } = require('./toMatchObjectDemo');

describe('toMatchObject matcher (Inventario TECH)', () => {

    test('Happy path: producto coincide parcialmente con estructura esperada', () => {
        const producto = crearProducto('Teclado RGB', 'periferico');
        expect(producto).toMatchObject(
            { nombre: 'Teclado RGB', categoria: 'periferico', disponible: true }
        );
    });

    test('Happy path: obtenerFicha retorna estructura esperada', () => {
        const producto = {
            nombre: 'Laptop Gamer',
            categoria: 'computo',
            disponible: true,
            extra: 'no importa'
        };

        expect(obtenerFicha(producto)).toMatchObject({
            categoria: 'computo',
            disponible: true
        });
    });

    test('Sad path: errores de tipos y comparacion incorrecta', () => {
        expect(() => crearProducto(123, 'categoria'))
            .toThrow('nombre y categoria deben ser strings');

        const p1 = { categoria: 'periferico', disponible: true };
        const p2 = { categoria: 'computo', disponible: true };

        expect(compararProductos(p1, p2)).toBe(false);
    });

});
