/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Visit cypress website', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })

    it('go to focus link and verify', () => {
        cy.contains('focus').click()
        cy.url()
         .should('include', '/commands/actions')
    })

    it('click on command dropdown and verify', () => {
        cy.get('.navbar-nav').contains('Commands').click()
        expect(true).to.be.true 
    })

    it('click on querying from dropdown and verify', () => {
          cy.get('.navbar-nav').contains('Commands').click()
        cy.get('.dropdown-menu').contains('Querying').click()
        cy.url()
        .should('include', '/commands/querying')
    })

    it('click on traversal from dropdown and verify', () => {
        cy.get('.navbar-nav').contains('Commands').click()
        cy.get('.dropdown-menu').contains('Traversal').click()
        cy.url()
        .should('include', '/commands/traversal')
    })

    it('click on navigation from dropdown and verify', () => {
        cy.get('.navbar-nav').contains('Commands').click()
        cy.get('.dropdown-menu').contains('Navigation').click()
        cy.url()
        .should('include', '/commands/navigation')
    })
})
