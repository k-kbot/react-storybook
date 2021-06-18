describe('Game', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('returns "Winner: X" when X wins', () => {
    cy.get('[data-e2e="button-0"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-8"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-1"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-4"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-2"]').click().should('have.text', 'X')
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: X')
  });

  it('returns "Draw!" when game is draw', () => {
    cy.get('[data-e2e="button-0"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-1"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-2"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-3"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-5"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-4"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-6"]').click().should('have.text', 'X')
    cy.get('[data-e2e="button-8"]').click().should('have.text', 'O')
    cy.get('[data-e2e="button-7"]').click().should('have.text', 'X')
    cy.get('[data-e2e="status"]').should('have.text', 'Draw!')
    cy.get('[data-e2e="status"]').should('not.have.text', 'Winner: ')
  });
});
