const {
  validarEmail,
  encontrarPalabra,
  limpiarTexto
} = require('./toMatchDemo_mp');

describe('toMatch matcher (Inventario TECH)', () => {
  test('Happy path: validar correos electrónicos de Inventario TECH', () => {
    // Usando directamente regex con toMatch
    expect('admin@inventariotech.com').toMatch(/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i);
    // Usando la función validarEmail
    expect(validarEmail('proveedor@techstore.ec')).toBe(true);
  });

  test('Happy path: encontrar palabra en descripción de producto', () => {
    expect(encontrarPalabra('Laptop Gamer ASUS con RGB', 'gamer')).toBe(true);
  });

  test('Sad path: email o patron invalido', () => {
    expect(() => validarEmail(123)).toThrow('email debe ser string');
    expect(() => encontrarPalabra('Teclado mecánico', 123)).toThrow('texto y patron deben ser strings');
  });

  test('Happy/Sad path: limpiar texto de descripción', () => {
    expect(limpiarTexto('   Mouse  inalámbrico   gamer  ')).toMatch('Mouse inalámbrico gamer');
    expect(() => limpiarTexto(null)).toThrow('texto debe ser string');
  });
});
