const { calcularBonoAntiguedad } = require('./bonoAntiguedad');

describe('Pruebas Unitarias calculos bonos', () => {
    test('Happy path: calculo de bono', () =>{
        //const resultado = calcularBonoAntiguedad(0,450) 
        expect(calcularBonoAntiguedad(0,450) ).toEqual({"bono": 0, "salarioBase": 450, "totalConBono": 450});
    });

    test('Sad Path: anios invalidos ', () =>{
        expect( ()=>calcularBonoAntiguedad(-1,450)).toThrow('datos invalidos');
        expect( ()=>calcularBonoAntiguedad('a',450)).toThrow('datos invalidos');
    });

    test('Sad path: salario invalido', ()=>{
        expect( ()=> calcularBonoAntiguedad(3,'a')).toThrow('datos invalidos');
        expect( ()=> calcularBonoAntiguedad(3,-1)).toThrow('datos invalidos');
        expect( ()=> calcularBonoAntiguedad(3,'2')).toThrow('datos invalidos');
    });
})