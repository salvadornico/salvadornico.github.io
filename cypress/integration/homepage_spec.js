/* eslint-env mocha */
/* global cy */

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
})
