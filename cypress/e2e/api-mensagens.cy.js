describe('API-Adopet', () => {
   // const tempoEsperato = Math.random() * 1000
  

    it('Mensagens da API', () =>{
        cy.request({
            metohd: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/c8af241e-98c0-4508-b7c8-b0e07c59a842',
            headers: cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
           // expect(res.duration).to.be.lte(tempoEsperato)
        })
    })
})