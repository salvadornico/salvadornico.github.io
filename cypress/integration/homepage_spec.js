describe("Home page", () => {
	beforeEach(() => {
		cy.visit("/")
	})

	it("Banner", () => {
		cy.contains("Nico Salvador")
	})

	it("Profile box", () => {
		cy.get("#app-banner").should("be.visible")
	})

	it("Contact button", () => {
		cy.get("#scrollDownBtn").should("be.visible")
	})

	it("Section cards", () => {
		cy
			.get(".section-card")
			.should("have.length", 4)
			.and("be.visible")
	})

	it("Contact Bubbles", () => {
		cy
			.get(".contact-bubble")
			.should("have.length", 10)
			.and("be.visible")
	})
})
