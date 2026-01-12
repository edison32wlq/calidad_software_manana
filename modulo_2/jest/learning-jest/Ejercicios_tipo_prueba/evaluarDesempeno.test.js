const {evaluarDesempeno} = require ('./evaluarDesempeno')

describe('test unitarios evaluar desempeño', ()=>{
    test('Happy path: evaluar', ()=>{
        let list = [1,2,3];
        let list2 = [7,7,7,7,7];
        let list3 = [10,10,10,10];
        
        expect(evaluarDesempeno(list)).toEqual({"promedio": 2, "resultado":'Bajo'});
        expect(evaluarDesempeno(list2)).toEqual({"promedio": 7, "resultado":'Aceptable'});
        expect(evaluarDesempeno(list3)).toEqual({"promedio": 10, "resultado":'Alta'});
    });

    test('Sad path: array invalido', ()=>{
        expect( ()=> evaluarDesempeno('a')).toThrow('medicion invalida');
    })
})