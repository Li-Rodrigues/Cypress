describe('CT002.001-Login válido com e-mail e senha corretos', () => {
    it('casos de dengue por localização', () => {
        cy.visit("http://44.202.60.201/protected/login")
        cy.get('#username').type("admin")
        cy.get('#password').type("admin")
        cy.get('.button').click()
        cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
        cy. get('select#daysFilter').select('90 dias')
        
        
    });
  });