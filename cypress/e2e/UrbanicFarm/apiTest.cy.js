/// <reference types="cypress" />

import browserUtilities from "../../support/BrowserUtilities"

describe('i will test the API', ()=>{   // https://docs.cypress.io/api/commands/request
    it('test01 by using default', ()=>{
    
        cy.request('POST',
            'https://test.urbanicfarm.com/api/public/register',
            {firstName:'Mehmet',lastName:'Ayaz',email:'rtyas@gmail.com',plainPassword:'asdASD123,',confirmPassword:'asdASD123,'})
            .then((data)=>{
                console.log(data)
                console.log(data.body.email)
            })
    
    })

    it('test02 by using options', ()=>{
    
        cy.request({
            method:'POST',
            url:'/api/public/register',
            body:{firstName:'Mehmet',lastName:'Ayaz',email:'rtyas1@gmail.com',plainPassword:'asdASD123,',confirmPassword:'asdASD123,'}
        })
            .then((data)=>{
                console.log(data)
                console.log(data.body.email)
            })
    
    })

    it('test03 by using plugin', ()=>{
    
        cy.api({
            method:'POST',
            url:'/api/public/register',
            body:{firstName:'Mehmet',lastName:'Ayaz',email:'rtyas1235@gmail.com',plainPassword:'asdASD123,',confirmPassword:'asdASD123,'}
        })
            .then((data)=>{
                console.log(data)
                console.log(data.body.email)
            })
    
    })

    it('test04 by using fixture', ()=>{
    
        cy.fixture('registerFakeData.json')
            .then((data)=>{
                console.log(data.firstName)      //prints output to console

                cy.log(data.lastName)           //prints the output to the cypress page
            })
    
    })

    it('writeFile', ()=>{  
        browserUtilities.createFakeDataForRegistration()   // I check if the file is created or not
    })


    it('test06 by using create method and fixture', ()=>{

        browserUtilities.createFakeDataForRegistration()  //a new data is created.The data created in the method will be written to the file named registerFakeData.json.
    
        cy.fixture('registerFakeData.json')               //This command loads data from a file named registerFakeData.json, which is located in the fixtures folder of your Cypress directory structure.
            .then((fixtureData)=>{                        // The loaded data is then passed into the subsequent chain of commands as fixtureData.
                cy.api({                                  //Here, the cy.api command is used to send an HTTP POST request to the /api/public/register endpoint with data as the request body.
                    method:'POST',
                    url:'/api/public/register',
                    body: fixtureData,                           //Here is the data we created with the createFakeDataForRegistration() method.
                })
                    .then((data)=>{                      //After the API request, the response is captured in the data variable.Now I have to compare that the data(fixtureData) I sent and the response(data) are the same.
                        console.log(data);
                        console.log(data.body.email);
                        expect(fixtureData.email).to.equal(data.body.email)  //The assertion checks that the email address in the response matches the email address in the fixture data.
                    })
                
            })
    
    })

    it('test05 by using fixture', ()=>{
    
        cy.fixture('registerFakeData.json')
            .then((data)=>{
                cy.api({
                    method:'POST',
                    url:'/api/public/register',
                    body: data,
                })
                    .then((data)=>{
                        console.log(data)
                        console.log(data.body.email)
                    })
                
            })
    
    })


})