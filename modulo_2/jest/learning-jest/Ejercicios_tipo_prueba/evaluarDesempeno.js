function evaluarDesempeno(mediciones){
    if(!Array.isArray(mediciones))
        throw new TypeError('medicion invalida');

    let subtotal = 0;
    mediciones.forEach((medicion, i)=>{
        subtotal = subtotal + medicion;
    })

    let promedio = (subtotal/mediciones.length);

    let resultado;
    if (promedio < 6){
        resultado = 'Bajo';
    } else if( promedio >= 6 && promedio <= 7.9){ //10
        resultado = 'Aceptable';s
    } else {
        resultado = 'Alta';
    }

    return {promedio, resultado};
}

module.exports = {evaluarDesempeno};