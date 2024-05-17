import { faker } from '@faker-js/faker';    //BrowserUtilities deki methodun(registerMethodNewStyle) RegisterPage sayfası altında yer alması daha mantıklı olur
import { expect } from 'chai';
import { registerPage } from '../Pages/RegisterPage';
import browserUtilities from '../../support/BrowserUtilities';

/// <reference types="cypress" />

describe('i will test register function', ()=>{
    it.skip('test register', ()=>{           // Just type .skip after the it block that you don't want to run, or .only to run only what you want.

        const userEmail = faker.internet.email()
        
        cy.visit('/')   // baseUrl is defined in cypress.config.js file 
        
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

    it.skip('test register with xpath', ()=>{            // require('cypress-xpath') was added to the e2e.js file under the support folder. After adding this, we can now use XPath. The other option is to import.

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

    it.skip('test register by using pom', ()=>{          
        
        const userEmail = faker.internet.email()
        registerPage.registerMethod(userEmail)
        // way 1
        cy.get('.Toastify__toast-container').should('be.visible')
        //way 2
        registerPage.elements.toast().should('be.visible')  // Do not forget the symbol () f.ex toast()
        cy.get('.Toastify__toast-container').should('have.text', 'Welcome!')


        cy.get('.Toastify__toast-container').invoke('text').then(toast=>{expect(toast).to.equal('Welcome!')})
         
    })

    it.skip('to create method', ()=>{
        browserUtilities.registerMethodNewStyle()
    })

    
    it.skip('newRegisterMethod', ()=>{          
        
        const password = faker.internet.password()
        const userEmail = faker.internet.email()
        registerPage.newRegisterMethod(password,userEmail)
        
        registerPage.elements.toast().should('be.visible') 
        cy.get('.Toastify__toast-container').should('have.text', 'Welcome!')


        cy.get('.Toastify__toast-container').invoke('text').then(toast=>{expect(toast).to.equal('Welcome!')})
         
    })

    it.only('Using as cypress command', ()=>{
        cy.registerMethod()
    })


})