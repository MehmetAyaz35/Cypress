import { faker } from "@faker-js/faker";

const registerMethodNewStyle = ()=>{
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

        cy.get('.Toastify__toast-container').invoke('text').then(toast=>{expect(toast).to.equal('Welcome!')})
}

const createFakeDataForRegistration = ()=>{
    cy.writeFile('cypress/fixtures/registerFakeData.json', {     // We enter 2 parameters: which file to write to and what to write.If you type the path incorrectly, for example 'cypress/asd/registerFakeData.json'. In this case, it creates a file named asd and creates a file named registerFakeData.json under it and creates the data in that file.
    "firstName":"Mehmet",
    "lastName":`${faker.internet.userName()}`,
    "email":`${faker.internet.email()}`,
    "plainPassword":"asdASD123,",
    "confirmPassword":"asdASD123,"
    })

}

export default{
    registerMethodNewStyle,
    createFakeDataForRegistration
}
