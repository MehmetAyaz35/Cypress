describe('Bontouch Website Test', () => {
    it('Should apply for a career opportunity', () => {
        //  URL
        cy.visit('https://www.bontouch.com/')
        
        // close cookies
        // cy.get('#cookie_action_close_header_reject').click()
        
        cy.get('.cm-header-wrapper > .menu-toggle-btn').click()

        cy.get(':nth-child(9) > a > span').click()
        
        cy.get('[data-action="click->common--cookies--alert#disableAll"]').click()

        cy.get('[href="https://careers.bontouch.com/connect"]').click()

        cy.get('[href="https://careers.bontouch.com/connect"] > .flex').click()

        cy.get('[data-connect--signup-form-target="departments"] > .button').click()

        cy.get('[data-connect--signup-form-target="departments"] > .button').click()

        cy.get('#candidate_consent_given').check()

        cy.get('#candidate_consent_given_future_jobs').check()

        cy.get('#candidate_email').type('mehmet.90.ayaz@gmail.com')
        cy.wait(1000)

        cy.get('span[class="absolute inset-0 flex items-center justify-center opacity-0 transition transition-opacity').click()
        
""
    })
})
