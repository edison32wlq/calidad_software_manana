const { validarEmail } = require('./validarEmail_mp');

describe('Verificar Email (Inventario TECH)', () => {
  test('Happy path: que devuelva false con formato inválido', () => {
    const response = validarEmail('admin.inventario'); // sin @
    expect(response).toBe(false);
  });

  test('Happy path: que devuelva true con formato válido', () => {
    const response = validarEmail('soporte@inventariotech.com'); // con @ y TLD
    expect(response).toBe(true);
  });

  test('Sad path: tipo inválido lanza TypeError', () => {
    expect(() => validarEmail(3455))
      .toThrow('email debe ser string');
  });
});
