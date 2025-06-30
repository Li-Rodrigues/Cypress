describe('CT003.001-Escolha da área do Paciente', () => {
    it('deve ter acesso à área do Paciente', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/apppaciente"]').click()
    });
  });

  describe('CT003.002-Escolha da área Administrativa', () => {
    it('deve ter acesso à área Administrativa', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy.get('[routerlink="/protected/appuser"]').click()
    });
  });