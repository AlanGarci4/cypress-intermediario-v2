// Versão Inicial do Login
// describe('Login', () => {
//   it('Login Com Sucesso', () => {
//     cy.login()

//     cy.get('.qa-user-avatar').should('be.visible')
//   })
// })


// Versão Otimizada do Login - Exercício 3
describe('Login', () => {
  it('Login com Sucesso', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar').should('be.visible')
  })
})

