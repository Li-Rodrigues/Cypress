describe.only('CT004.001-Buscar por Paciente', () => {
    it('deve ter acesso à área do Paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
        cy.get('.ng-untouched').type("Amanda Silva")
        cy.get('.busca-container > :nth-child(2)').click()
    });
});

describe('CT004.002-Buscar por dados do Paciente', () => {
    it('deve ter acesso à área do Paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('h2').should('contain', 'Detalhes do Paciente')
    });
});

describe('CT004.003-Editar dados do Paciente', () => {
    it('deve ter acesso à área do Paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('h2').should('contain', 'Detalhes do Paciente')
        cy.get(':nth-child(3) > :nth-child(2) > div > :nth-child(2)').click()
        cy.get('#nome').clear().type("Pietro Domenico")
        cy.get('.btn-submit').contains('Salvar').click()
        cy.contains('Paciente atualizado com Sucesso!').should('be.visible')

    });
});

describe('CT004.004-Voltar na tela do Paciente', () => {    
    it('deve ter botão de "Voltar" para a tela do Paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('h2').should('contain', 'Detalhes do Paciente')
        cy.get('app-paciente-detalhe > :nth-child(3) > :nth-child(2)').click()

    });
});

describe('CT004.005-Inserir Novo Exame na tela de Detalhes do Paciente', () => {
    it('deve ter inserir Novo Exame tela do Paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('h2').should('contain', 'Detalhes do Paciente')
        cy.get(':nth-child(4) > [style="text-align: right; margin-top: 20px;"] > .btn-editar').click()
        cy.get(':nth-child(1) > .ng-untouched'). tyep()
        cy.get(':nth-child(2) > .ng-untouched').type()
        cy.get('form.ng-untouched > :nth-child(3) > .ng-untouched').type('Status do Exame')
        cy.get(':nth-child(4) > .ng-untouched'). type("03/05/2025")
        cy.get(':nth-child(5) > .ng-untouched'). type("Positivo")
        cy.get(':nth-child(6) > .ng-untouched'), type("Sem comorbidade")
        cy.get('.btn-submit').click()
    });
});

describe('CT004.006-Verificar os exames do Paciente', () => {
    it('deve ter os exames do paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('h2').should('contain', 'Detalhes do Paciente')
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('h2').shoudl('contain', 'Editar Exame')
        cy.get(':nth-child(1) > .ng-untouched'). type('02/05/2025')
        cy.get(':nth-child(2) > .ng-untouched').type('Teste Rápido')
        cy.get('form.ng-untouched > :nth-child(3) > .ng-untouched'). type('Concluído')
        cy.get(':nth-child(4) > .ng-untouched'), type('03/03/2025')
        cy.get(':nth-child(5) > .ng-untouched'). type('Positivo')
        cy.get(':nth-child(6) > .ng-untouched'). type('Detectável para dengue tipo 1')
        cy.get('.btn-submit').contains('Salvar').click()
        cy.contains('Exame atualizado com Sucesso!').should('be.visible')

});
    });
describe('CT004.008 - Preencher dados do Novo Paciente', () => {
    it('deve realizar cadastro do Paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('h2').should('contain', 'Detalhes do Paciente')
        cy.get(':nth-child(3) > :nth-child(2) > div > :nth-child(2)').click()
        cy.get('#nome').type("Pietro Domenico")
        cy.get('#data_nascimento').type("1948-06-21")
        cy.get('#genero').type("Masculino")
        cy.get('#contato').type("17997772244")
        cy.get('#historico_saude').type("Nenhuma comorbidade")
        cy.get('#endereco_cep').type("0141-000")
        cy.get('#endereco_logradouro').type("Rua das Flores")
        cy.get('#endereco_numero').type('65')
        cy.get('#endereco_complemento').type("Complemento")
        cy.get('#endereco_bairro').type("Vila Nery")
        cy.get('#endereco_cidade').type("São Carlos")
        cy.get('.btn-submit').contains('Salvar').click()
        cy.contains('Paciente atualizado com Sucesso!').should('be visible')

        });
            });


