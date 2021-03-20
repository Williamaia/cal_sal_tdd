const Calculadora = require('../lib/Calculadora');
const cal = new Calculadora();

describe('Calculadora', () =>{
    test('Cargo de desenvolvedor e salário >= 3000,00', () => {

        const funcionario = {
            nome:     'WILLIAM',
            email:    'WIL@GMAIL',  
            sal_base:  3000.00,
            cargo:    'DESENVOLVEDOR' 
        };

        expect(cal.montarCalculo(funcionario)).toBe(2400.00)
    })
})




