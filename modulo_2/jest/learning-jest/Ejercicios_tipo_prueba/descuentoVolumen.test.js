const {calcularPrecioPorVolumen} = require ('./descuentoVolumen');

describe('test unitario descuento volumen', ()=>{
    test('Happy path: calcular descuento Volumen', ()=>{
        expect(calcularPrecioPorVolumen(10,10)).toBe(100);
        expect(calcularPrecioPorVolumen(11,10)).toBe(104.5);
    });

    test('Sad path: dato invalidos', () =>{
        expect( ()=> calcularPrecioPorVolumen('a',10)).toThrow('datos invalidos');
        expect( ()=> calcularPrecioPorVolumen(10.5,10)).toThrow('datos invalidos');
        expect( ()=> calcularPrecioPorVolumen(10,'a1')).toThrow('datos invalidos');
    })
})