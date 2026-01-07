function calcularBonoAntiguedad(anios, salarioBase){
    if(typeof anios !== 'number' || anios < 0)
        throw new TypeError('datos invalidos');

    if(typeof salarioBase !== 'number' || salarioBase < 0)
        throw new TypeError('datos invalidos');

    let bono = 0;
    if (anios >= 0 && anios <= 2){
        bono = 0;
    } else if (anios >= 3 && anios <=5){
        bono = 0.05 * salarioBase;
    } else if (anios >= 6 && anios <=10){
        bono = 0.1 * salarioBase;
    } else {
        bono = 0.15 * salarioBase;
    }
    let totalConBono = salarioBase + bono;
    return {
            salarioBase,
            bono,
            totalConBono
        };
}

module.exports = { calcularBonoAntiguedad }

