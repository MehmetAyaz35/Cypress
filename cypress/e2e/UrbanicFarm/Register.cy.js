import { faker } from '@faker-js/faker';
/// <reference types="cypress" />

describe('i will test register function', ()=>{
    it.skip('test register', ()=>{           // çalışmasını istemediğin it bloğundan sonra .skip yazman yeterli veya sadece istediğini çalıştırmak için .only

        const userEmail = faker.internet.email()
        
        cy.visit('/')   // baseUrl cypress.config.js dosyasında tanımlı 
        
        cy.get('a[href="/auth/register"].mr-2').click()
        // first name
        cy.get('#registration_form_firstname').type('Mehmet')
        // last name
        cy.get('#registration_form_lastname').type('Ayaz')
        // email
        cy.get('#registration_form_email').type(userEmail)
        //password
        cy.get('#registration_form_plainPassword').type('asdASD123,')
        //confirm password
        cy.get('#registration_form_confirmPassword').type('asdASD123,')
        //apply register
        cy.get('.btn').click()
    })

    it('test register', ()=>{          

        const userEmail = faker.internet.email()
        
        cy.visit('/')  
        
        cy.get('a[href="/auth/register"].mr-2').click()
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

        cy.get('.Toastify__toast-container').should('be.visible')

        cy.get('.Toastify__toast-container').should('have.text', 'Welcome!')
    })


})