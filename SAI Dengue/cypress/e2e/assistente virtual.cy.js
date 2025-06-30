describe('CT004.001-Acesso a página do Assistente Virtual', () => {
    it('não deve exibir resposta válida', () => {
        cy.visit('http://44.202.60.201/')
        cy.get('h2').should('contain', 'SAI Dengue')
        cy.get('.inputSearch').type('Quais sintomas da Tuberculose?{enter}')
        cy.get('.enter').click()
        cy.get('.error-msg').should('contain', 'Eu não sei responder isso')
        
              
    });
  });

  describe('CT004.002-Acesso do Assistente Virtual', () => {
    it('deve exibir resposta válida', () => {
        cy.visit('http://44.202.60.201/')
        cy.get('h2').should('contain', 'SAI Dengue')
        cy.get('.inputSearch').type('Quais sintomas da dengue?{enter}')
        cy.get('section > p').should('contain', 'Sintomas da dengue')
        
              
    });
  });