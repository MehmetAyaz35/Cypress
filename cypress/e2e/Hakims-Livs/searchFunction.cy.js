describe('Cola Search Test', () => {
    it('types "cola" into the search box and checks the first result', () => {
      // 1. Web sayfasını ziyaret edin
      cy.visit('http://grupp-5.vercel.app');
  
      // 2. Arama kutusunu bulun
      cy.get('#root > div > div:nth-child(3) > div:nth-child(1) > div > input[type=text]')
        .should('be.visible')
        .as('searchBox'); // Alias olarak 'searchBox' adını verin
  
      // 3. Arama kutusuna "cola" yazın ve enter tuşuna basın
      cy.get('@searchBox')
        .type('cola{enter}');
  
      // 4. Arama sonuçlarının yüklenmesini bekleyin
      // Bu adım, uygulamanın davranışına bağlı olarak değişebilir. Örneğin, sonuçlar anında yükleniyorsa veya sayfa yeniden yükleniyorsa, uygun Cypress komutları kullanılmalıdır.
  
      // 5. İlk sonucu seçin ve kontrol edin
      // İlk ürünün seçimi, ürünün DOM yapısına bağlı olarak değişebilir.
      // Örneğin, ilk ürün bir listeye <li> etiketi ile dahil edilmişse, ilk 'li' etiketini seçmek için aşağıdaki gibi bir komut kullanabilirsiniz.
      cy.get('#root > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > h3')
        .should('contain', 'Cola') // Ürün adında "Cola" kelimesini içerdiğini kontrol edin
        .and('be.visible'); // Ürünün görünür olduğunu kontrol edin
    });
  });
  

// describe('Cola Search Test', () => {
//     it('types "cola" into the search box and checks for the presence of Cola in the results', () => {
//       cy.visit('http://grupp-5.vercel.app');
  
//       // Sayfa yüklendikten sonra arama kutusuna 'cola' yazın
//       cy.get('input[placeholder="Search..."]').should('be.visible').type('cola{enter}');
  
//       // Sayfanın içeriğinin yüklenmesini bekleyin
//       cy.wait(21000); // Örnek olarak 5 saniye bekleyin, ancak bu süre uygulamanıza göre değişebilir
  
//       // Cola metnini içeren ilk ürünü kontrol edin
//       // Burada daha genel bir seçici veya bir class ismi kullanmalısınız
//       cy.contains('#root > div > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(3) > div > div:nth-child(2) > h3').should('be.visible');
//     });
//   });
  
  