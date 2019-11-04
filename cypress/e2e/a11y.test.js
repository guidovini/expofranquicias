/// <reference types="Cypress" />

describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
    cy.wait(500)
  })
  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y()
  })
  it('Navigates to page 2 and checks for accessibility violations', () => {
    cy.getByText(/Buscar Franquicias/i)
      .click()
      .checkA11y()
  })
})
