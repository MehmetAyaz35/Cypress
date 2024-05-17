class RegisterPage{
    elements = {
        registerButton: ()=> cy.get('a[href="/auth/register"].mr-2'),
        firstName: () => cy.get('#registration_form_firstname'),  
        lastName: () => cy.get('#registration_form_lastname'),
        email:  () => cy.get('#registration_form_email'),  
        password: () => cy.get('#registration_form_plainPassword'),   
        confirmPassword: () => cy.get('#registration_form_confirmPassword'), 
        submit: () => cy.get('.btn'),
        toast:() =>cy.get('.Toastify__toast-container'),
    }

    registerMethod(email){  //Just now the only parameter is email
        cy.visit('/')
        this.elements.registerButton().click();
        this.elements.firstName().type('Hakan',{force:true});
        this.elements.lastName().type('San',{force:true});
        this.elements.email().type(email);
        this.elements.password().type('asdASD123,',{force:true});
        this.elements.confirmPassword().type('asdASD123,',{force:true});
        this.elements.submit().click();
    };

    newRegisterMethod(password, email){
        cy.visit('/')
        this.elements.registerButton().click();
        this.elements.firstName().type('Mehmet');
        this.elements.lastName().type('Ayaz');
        this.elements.email().type(email);
        this.elements.password().type(password);
        this.elements.confirmPassword().type(password);
        this.elements.submit().click();
    };
}

export const registerPage = new RegisterPage()  //I need to write export line of code to call this method as an object