const {calcularTotalCafeteria1} = require ('./consumoCafeteria1')

describe('test unitario cafeteria', ()=>{
    test('Happy path: calcular total', ()=>{
        let list = [
            {nombre:'Julian', precioUnitario:10, cantidad:10},
            {nombre:'Eduardo', precioUnitario:20, cantidad:20}
        ]
        expect(calcularTotalCafeteria1(list,10)).toBe(550);
    });

    test('Sad path: array invalido', ()=>{
        expect( ()=> calcularTotalCafeteria1('a',10)).toThrow('item invalido');
    })

    test('Sad path: items invalidos', ()=>{
        let list = [
            {nombre:10, precioUnitario:10, cantidad:10},
            {nombre:'Eduardo', precioUnitario:20, cantidad:20}
        ]
        let list2 = [
            {nombre:'Julian', precioUnitario:'a', cantidad:10},
            {nombre:'Eduardo', precioUnitario:20, cantidad:20}
        ]
        let list3 = [
            {nombre:'Julian', precioUnitario:'a', cantidad:10},
            {nombre:'Eduardo', precioUnitario:20, cantidad:'11'}
        ]
        expect(()=> calcularTotalCafeteria1(list,10)).toThrow('item invalido');
        expect(()=> calcularTotalCafeteria1(list2,10)).toThrow('item invalido');
        expect(()=> calcularTotalCafeteria1(list3,10)).toThrow('item invalido');

    });

})