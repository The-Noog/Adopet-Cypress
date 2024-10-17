describe('Página de cadastro', () => {
    //beforeEach separa os casos para melhor visualização.
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();

    })


    it('Deve preencher os campos do formulário corretamente a autenticar um usuário na página', () => {

        cy.login('weslleynoog@hotmail.com','Noog1998');

    })
})