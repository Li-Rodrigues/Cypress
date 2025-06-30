describe('CT001.001-Login sem username e senha ', () => {
  it('deve exibir mensagem de erro: Usuário ou senha inválidos', () => {
      cy.visit("http://44.202.60.201/protected/login")
      cy.get('.button').click()
      cy.get('.error-msg').should('contain', 'Usuário ou senha inválidos!')
  });
});


describe('CT001.002-Login com username correto e sem preenchimento de senha', () => {
  it('deve exibir mensagem de erro: Usuário ou senha inválidos', () => {
      cy.visit("http://44.202.60.201/protected/login")
      cy.get('#username').type("admin")
      cy.get('#password').type("0")
      cy.get('.button').click()
      cy.get('.error-msg').should('contain', 'Usuário ou senha inválidos!')
  });
});

describe('CT001.003-Login sem username e com preenchimento correto de senha', () => {
  it('deve exibir mensagem de erro: Usuário ou senha inválidos', () => {
      cy.visit("http://44.202.60.201/protected/login")
      cy.get('#username').type("0")
      cy.get('#password').type("admin")
      cy.get('.button').click()
      cy.get('.error-msg').should('contain', 'Usuário ou senha inválidos!')
  });
});

describe('CT001.004-Login com username inexistente e com ou sem preenchimento de senha', () => {
  it('deve exibir mensagem de erro: Usuário ou senha inválidos', () => {
      cy.visit("http://44.202.60.201/protected/login")
      cy.get('#username').type("usuarionaoexistente")
      cy.get('#password').type("0")
      cy.get('.button').click()
      cy.get('.error-msg').should('contain', 'Usuário ou senha inválidos!')
  });
});

describe('CT001.005-Login com username existente e senha inválida', () => {
  it('deve exibir mensagem de erro: Usuário ou senha inválidos', () => {
      cy.visit("http://44.202.60.201/protected/login")
      cy.get('#username').type("admin")
      cy.get('#password').type("senhanaoexistente")
      cy.get('.button').click()
      cy.get('.error-msg').should('contain', 'Usuário ou senha inválidos!')
  });
});


describe('CT001.006-Login válido com e-mail e senha corretos', () => {
  it('deve ir para a tela de SAI Dengue - Área Protegida', () => {
      cy.visit("http://44.202.60.201/protected/login")
      cy.get('#username').type("admin")
      cy.get('#password').type("admin")
      cy.get('.button').click()
      cy.get('.logo').should('contain', 'SAI Dengue - Área protegida')
  });
});

