/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visits the Hakims Livs', () => {
      cy.visit('http://localhost:3000/')
    })
  })