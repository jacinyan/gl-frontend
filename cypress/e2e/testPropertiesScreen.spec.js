describe("test PropertyScreen", () => {
    it("should include a navbar as well", () => {
       
        cy.visit("/login")
        cy.findByTestId("loginForm").submit();
        cy.get('input[name="email"]')
            .type("admin@example.com")

        cy.get('input[name="password"]')
            .type("@password")
        cy.findByTestId("loginForm").submit(); 
        
        cy.visit("/properties")
        cy.url("include", "properties")

        cy.get('a[href="/properties/corporate"]')
        cy.get('a[href="/properties/birthday"]')

        cy.get('a[href="/properties/wedding"]')
          .click()

        

    })
})