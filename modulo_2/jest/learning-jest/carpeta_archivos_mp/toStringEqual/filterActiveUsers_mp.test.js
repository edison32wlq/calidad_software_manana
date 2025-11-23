const { filterActiveProducts } = require('./filterActiveUsers_mp');

describe('Filtrar Productos Activos (Inventario TECH)', () => {

    test('Happy path: Productos filtrados correctamente', () => {

        const productos = [
            { id: 1, nombre: "Teclado RGB", activo: true },
            { id: 2, nombre: "Mouse Inalámbrico", activo: false },
            { id: 3, nombre: "Laptop Gamer", activo: true }
        ];

        const response = filterActiveProducts(productos);

        const expectedProductos = [
            { id: 1, nombre: "Teclado RGB", activo: true },
            { id: 3, nombre: "Laptop Gamer", activo: true }
        ];

        expect(response).toStrictEqual(expectedProductos);
    });

    test('Sad path: No coincide si falta propiedad o cambia el tipo', () => {

    const productos = [
        { id: 1, nombre: "Teclado RGB", activo: true },
        { id: 2, nombre: "Mouse Inalámbrico", activo: false }
    ];

    const response = filterActiveProducts(productos);

    const expectedProductos = [
        { id: 1, nombre: "Teclado RGB", activo: 'true' } // string, no boolean
    ];

    expect(response).not.toStrictEqual(expectedProductos);
});

});
