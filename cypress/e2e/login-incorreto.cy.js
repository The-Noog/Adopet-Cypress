
describe('Página de Login', () => {
    //beforeEach separa os casos para melhor visualização.
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400,
        }).as('stubPost')

    })


    it('Verifica as mensagens de falha do login', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    })

    it('Deve falhar mesmo se os campos foram preenchidos corretamente', () => {
      cy.login('weslleynoog@hotmail.com','Noog1998')
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })

})  