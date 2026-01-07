const {actualizarStock}  = require ('./controlStock');

describe('test unitarios control stock', () =>{
    test('Happy path: actualizarStock', ()=>{
        expect(actualizarStock(10,-5)).toEqual({"movimiento": -5, "stockActual": 5});
    });

    test('Sad path: stock invalido', ()=>{
        expect( () => actualizarStock('a',10)).toThrow('stock invalido');
        expect( () => actualizarStock(0,10)).toThrow('stock insuficiente');
        expect( () => actualizarStock(2,'a')).toThrow('movimiento invalido');
        expect( () => actualizarStock(5,-10)).toThrow('stock insuficiente');
    });
})