describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://stage-ferp.fi/user/login');
        cy.get('input.ui-input__element[type="email"]', { timeout: 10000 }).should('be.visible').type('example+25@feelia.com');
        cy.get('input.ui-input__element[type="password"]', { timeout: 10000 }).should('not.be.disabled').type('123456');
        cy.get('button.ui-button.size-56.primary.form-btn[type="submit"]').click();
    });

    it('Login', () => {
        cy.url().should('include', '/order');
    });

    it('Navigate to Order history', () => {
        cy.get('a[href="/order-history"]', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/order-history');
    });

    it('Navigate to Diet and allergies', () => {
        cy.get('a[href="/allergic"]', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/allergic');
    });
});
