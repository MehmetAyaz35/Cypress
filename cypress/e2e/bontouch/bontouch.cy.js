describe('Bontouch Website Test', () => {
    it('Should apply for a career opportunity', () => {
        // Ziyaret edilecek URL
        cy.visit('https://www.bontouch.com/')
        
        // Çerez bildirimini kapat
        cy.get('#cookie_action_close_header_reject').click()
        
        // Kariyer fırsatlarına yönlendir
        cy.get('body > div.bontouch-site > div.bontouch-site__content > section.bontouch-o-section.bontouch-o-section--no-bottom-padding > div > p > strong > a').click()
        
        
        // İletişim kur
        cy.get('#section-28338169 > section > div.relative.flex.flex-col.items-center.min-h-\[inherit\].justify-center.w-full.h-full.px-4.text-lg.text-center.z-career-block-content > div > div > a:nth-child(1) > span > span').click()
        
        cy.get('body > dialog.fixed.shadow-form.w-auto.items-center.rounded.p-4.bg-company-primary.text-company-primary.overflow-y-auto.border-none.max-h-\[80vh\].z-cookie-alert.lg\:gap-x-6.lg\:max-h-\[calc\(100vh-40px\)\].flex-col.inset-x-4.bottom-4.mb-0.mt-auto.justify-between.\!translate-y-0.\!top-0.lg\:p-10.lg\:flex-row.lg\:inset-x-\[40px\].lg\:mb-6.flex > div.flex.flex-col.items-center.gap-\[10px\].mt-6.flex-shrink-0.mb-2.w-full.md\:flex-row.md\:w-auto.lg\:flex-col > button:nth-child(2)').click()
        // QA bölümüne tıkla
        cy.get('#connect > div.flex.min-h-screen.company-links > div.flex.flex-col.items-center.justify-center.w-full.bg-gray-200 > div > div.w-full.max-w-500 > form > div:nth-child(3) > div > div > div > div > div:nth-child(12) > label > span').click()
        
        // // Başvuruya devam et
        // cy.get('#connect form button').click()
        
        // // Onay kutularını işaretle
        // cy.get('#candidate_consent_given').check()
        // cy.get('#candidate_consent_given_future_jobs').check()
        
        // // E-posta adresini gir
        // cy.get('#candidate_email').type('mehmet.90.ayaz@gmail.com{enter}')
        
        // Bekle
        cy.wait(5000)
    })
})
