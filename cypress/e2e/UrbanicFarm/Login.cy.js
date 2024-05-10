/// <reference types="cypress" />

describe('i will test the login function', ()=>{
    it('test login', ()=>{
        
        cy.visit('/')   // baseUrl is defined in cypress.config.js file 
        cy.viewport('macbook-16')
        cy.url().should('equal','https://test.urbanicfarm.com/')
    
    })
})