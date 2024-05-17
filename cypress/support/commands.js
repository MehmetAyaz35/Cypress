// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from "@faker-js/faker";
Cypress.Commands.add('registerMethod', ()=>{  //I created a method like get, evoke, should under commands.js file.

    const userEmail = faker.internet.email()

       
        // visit site
        cy.visit('/')  
        // click register button
        cy.xpath('//a[@class="Navbar_textLink__f6_Al mr-2"]').click()
        // first name
        cy.get('#registration_form_firstname').type('Hakan',{force:true})  
        // last name    
        cy.get('#registration_form_lastname').type('San',{force:true})  
        // email    
        cy.get('#registration_form_email').type(userEmail,{force:true})  
        //password  ,{force:true}
        cy.get('#registration_form_plainPassword').type('asdASD123,',{force:true})   
        //confirm password  
        cy.get('#registration_form_confirmPassword').type('asdASD123,',{force:true}) 
        //apply register    
        cy.get('.btn').click()
        //We check whether the message is visible or not
        cy.get('.Toastify__toast-container').should('be.visible')
        // We check to see if the message is correct.
        cy.get('.Toastify__toast-container').should('have.text', 'Welcome!')
        // We check to see if the message is correct with assertion "expect" like "should" above example 
        cy.get('.Toastify__toast-container').invoke('text').then(toast=>{expect(toast).to.equal('Welcome!')})

})
