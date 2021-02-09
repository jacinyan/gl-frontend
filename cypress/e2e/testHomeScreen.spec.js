describe("test HomeScreen", () => {
   it("should include a nav bar and buttons", () => {
    cy.visit("/login")
    cy.findByTestId("loginForm").submit(); 
    cy.get('input[name="email"]')
        .type("admin@example.com")
     
        cy.get('input[name="password"]')
        .type("@password")

    cy.url().should("include", "/")

    cy.get('a[href="/home"]')


   })
})