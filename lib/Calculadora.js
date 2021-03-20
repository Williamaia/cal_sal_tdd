class Calculadora {
    constructor(){}

    montarCalculo(funcionario){
        if(funcionario.cargo === 'DESENVOLVEDOR'){
            let sal_liquido;

            if(funcionario.sal_base >= 3000.00) {
                sal_liquido = funcionario.sal_base * (100 - 20)/100;
            } else if(sal_base < 3000.00) {
                sal_liquido = funcionario.sal_base * (100 - 10)/100;
            }  
    
            return sal_liquido;
        }
    }
}

module.exports = Calculadora;