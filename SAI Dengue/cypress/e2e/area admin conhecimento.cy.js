describe('CT005.001-Editar Novo Conhecimento', () => {
    it('deve editar Novo Conhecimento', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/appuser"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2) > :nth-child(1)')
        cy.get('#subject'). type("Teste de cadastramento")
        cy.get('#information'). type("Teste de cadastro")
        cy.get('button').click()
        cy.get('.msg').should('contain', 'Conhecimento atualizado com sucesso!')

    });
  });

  describe('CT005.002-Excluir Conhecimento', () => {
    it('deve excluir conhecimento já existente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/appuser"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2) > :nth-child(2)').click()
        cy.get('.msg').should('contain', 'Tem certeza que deseja excluir este conhecimento!')
    });
  });

  describe('CT003.003-Inserir Novo Conhecimento', () => {
    it('deve inserir Novo Conhecimento', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/appuser"]').click()
        cy.get('[style="text-align: right; margin-top: 20px;"]').click()
        cy.get('#subject'). type('Quais as formas grave da dengue')
        cy.get('#information'). type('Choque ou acúmulo de líquidos')
        cy.get('button'). click()
        cy.get('.msg').should('contain', 'Conhecimento criado com sucesso!')

    });
  });