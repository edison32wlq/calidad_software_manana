const { sumarUbicaciones } = require('./sumObjects_mp');

describe('Sumar Ubicaciones en Inventario TECH', () => {

    test('Happy path: Suma correctamente las coordenadas', () => {
        const ubicacion1 = { x: 2, y: 3 };
        const ubicacion2 = { x: 1, y: 4 };

        const response = sumarUbicaciones(ubicacion1, ubicacion2);
        expect(response).toStrictEqual({ x: 3, y: 7 });
    });

    test('Sad path: No coincide si tiene propiedades extra o el tipo cambia', () => {
        const ubicacion1 = { x: 2, y: 3 };
        const ubicacion2 = { x: 1, y: 4, z: 0 };

        const response = sumarUbicaciones(ubicacion1, ubicacion2);

        expect(response).not.toStrictEqual({ x: 3, y: 7, z: 0 });
    });

});
