describe("Sections", () => {
	beforeEach(() => {
		cy.visit("/")
	})

	it("Portfolio", () => {
		cy.get("[href='/portfolio']").click()
		cy.url().should("contain", "/portfolio")
		cy.get(".portfolio-item").should("have.length.gte", 1)
		cy.go("back")
		cy.contains("Nico Salvador")
	})

	it("Github tile", () => {
		cy.get("[href='/portfolio']").click()
		cy.get(".github-tile").should("be.visible")
		cy.get(".repo").should("have.length.gte", 5)
	})

	it("Stack", () => {
		cy.get("[href='/skills']").click()
		cy.url().should("contain", "/skills")
		cy.get(".category").should("have.length", 5)
		cy.get(".tech-skill").should("have.length.gt", 5)
		cy.go("back")
		cy.contains("Nico Salvador")
	})
})
