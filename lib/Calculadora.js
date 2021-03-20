class Calculadora {
    montarCalculo(funcionario){
        
        if(funcionario.cargo === 'DESENVOLVEDOR'){
            return this.gerarCalculoDesenvolvedor(funcionario.sal_base);
        }
            
        if(funcionario.cargo === 'DBA') {
            return this.gerarCalculoDba(funcionario.sal_base)
        } 

        if(funcionario.cargo === 'TESTADOR') {
            return this.gerarCalculoTestador(funcionario.sal_base)
        }

        if(funcionario.cargo === 'GERENTE') {
            return this.gerarCalculoGerente(funcionario.sal_base)
        } 
    }

    gerarCalculoDesenvolvedor(sal_base){
        let sal_liquido;

        if(sal_base >= 3000.00) {
            sal_liquido = sal_base * (100 - 20)/100;
        } 
        
        if(sal_base < 3000.00) {
            sal_liquido = sal_base * (100 - 10)/100;
        }  

        return sal_liquido;
    }

    gerarCalculoDba(sal_base){
        let sal_liquido;

        if(sal_base >= 2000.00) {
            sal_liquido = sal_base * (100 - 25)/100;
        } 
        
        if(sal_base < 2000.00) {
            sal_liquido = sal_base * (100 - 15)/100;
        }  

        return sal_liquido;
    }

    gerarCalculoTestador(sal_base){
        let sal_liquido;

        if(sal_base >= 2000.00) {
            sal_liquido = sal_base * (100 - 25)/100;
        } 
        
        if(sal_base < 2000.00) {
            sal_liquido = sal_base * (100 - 15)/100;
        }  

        return sal_liquido;
    }

    gerarCalculoGerente(sal_base){
        let sal_liquido;

        if(sal_base >= 5000.00) {
            sal_liquido = sal_base * (100 - 30)/100;
        }
        
        if(sal_base < 5000.00) {
            sal_liquido = sal_base * (100 - 20)/100;
        }  

        return sal_liquido;
    }
} 

module.exports = Calculadora;