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

    test('Cargo de desenvolvedor e salário < 3000,00', () => {

        const funcionario = {
            nome:     'WILLIAM',
            email:    'WIL@GMAIL',  
            sal_base:  1000.00,
            cargo:    'DESENVOLVEDOR' 
        };

        expect(cal.montarCalculo(funcionario)).toBe(900.00)
    })

    test('Cargo de dba e salário >= 2000,00', () => {

        const funcionario = {
            nome:     'EDUARDO',
            email:    'EDU@GMAIL',  
            sal_base:  2000.00,
            cargo:    'DBA' 
        };

        expect(cal.montarCalculo(funcionario)).toBe(1500.00)
    })

    test('Cargo de dba e salário < 2000,00', () => {

        const funcionario = {
            nome:     'EDUARDO',
            email:    'EDU@GMAIL',  
            sal_base:  1000.00,
            cargo:    'DBA' 
        };

        expect(cal.montarCalculo(funcionario)).toBe(850.00)
    })

    test('Cargo de testador e salário >= 2000,00', () => {

        const funcionario = {
            nome:     'TAKESHI',
            email:    'TAK@GMAIL',  
            sal_base:  2000.00,
            cargo:    'TESTADOR' 
        };

        expect(cal.montarCalculo(funcionario)).toBe(1500.00)
    })
})




