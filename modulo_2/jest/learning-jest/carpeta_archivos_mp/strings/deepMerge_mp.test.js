const { deepMerge, normalizarProducto } = require('./deepMerge_mp');

describe('Inventario TECH - deepMerge', () => {
    test('Happy path: deepMerge combina productos anidados por valor', () => {
        const a = {
            producto: {
                nombre: 'Teclado Mecánico',
                categoria: 'Periférico'
            },
            activo: true
        };

        const b = {
            producto: {
                categoria: 'Gamer'
            },
            activo: true,
            stock: 10
        };

        const response = deepMerge(a, b);
        expect(response).toEqual({
            producto: {
                nombre: 'Teclado Mecánico',
                categoria: 'Gamer'
            },
            activo: true,
            stock: 10
        });
    });
});

describe('Inventario TECH - normalizarProducto', () => {
    test('Happy path: Normalizar Producto retorna estructura con promedio', () => {
        const producto = { nombre: 'Laptop Ultrabook', precios: [800, 900, 700] };
        const response2 = normalizarProducto(producto);

        expect(response2).toEqual({
            nombre: 'Laptop Ultrabook',
            precios: [800, 900, 700],
            promedio: 800
        });
    });

    test('Sad path: deepMerge con parámetros inválidos', () => {
        expect(() => deepMerge(null, {}))
            .toThrow(); 
        expect(() => deepMerge({}, []))
            .toThrow(); 
    });
});
