describe('Game', () => {
  it('returns "Winner: X" when X wins', () => {
    cy.visit('/')
    cy.get('[data-e2e="button-0"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-8"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-1"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-4"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-2"]').click().should('have.text', 'X')
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: X')
  });
});
