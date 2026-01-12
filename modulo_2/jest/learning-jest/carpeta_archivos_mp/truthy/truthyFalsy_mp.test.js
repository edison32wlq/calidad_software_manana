const { esTruthy, retornarDefault, requiereTextoNoVacio } = require('./truthyFalsy_mp');

describe('Truthy / Falsy (Inventario TECH)', () => {

    test('Happy path: valores truthy/falsy', () => {
        expect(esTruthy('teclado')).toBeTruthy();
        expect(esTruthy(1)).toBeTruthy();
        expect(esTruthy('')).toBeFalsy();
        expect(esTruthy(0)).toBeFalsy();
        expect(esTruthy(null)).toBeFalsy();
        expect(esTruthy(undefined)).toBeFalsy();
        expect(esTruthy(NaN)).toBeFalsy();
    });

    test('Happy path: retornarDefault usa falsy para asignar defecto', () => {
        expect(retornarDefault('Laptop', 'DEF')).toBe('Laptop');
        expect(retornarDefault('', 'DEF')).toBe('DEF');
        expect(retornarDefault(0, 'DEF')).toBe('DEF');
    });

    test('Sad path: requiereTextoNoVacio lanza en falsy o no string', () => {
        expect(() => requiereTextoNoVacio('')).toThrow('texto requerido');
        expect(() => requiereTextoNoVacio('     ')).toThrow('texto requerido');
        expect(() => requiereTextoNoVacio(null)).toThrow('texto requerido');
        expect(requiereTextoNoVacio('  Mouse Gamer  ')).toBe('Mouse Gamer');
    });

});
