describe('test our form inputs', () => {
    //beforeEach will run before each 'it' within the same describe
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('add text to input and submit form', () => {
        //fill out form
        cy.get('[data-cy=name]').type('Shazeen').should('have.value', 'Shazeen');
        cy.get('[data-cy=email]').type('email@email.com').should('have.value', 'email@email.com');
        cy.get('[data-cy=motivation]').type('help').should('have.value', 'help');
        cy.get('[data-cy=positions]').select('Yard Work').should('have.value', 'Yard Work');

        //submit form
        cy.get('[type=checkbox]').check().should('be.checked');
        //checks that the submit effect works and sends conformation
        cy.get('[data-cy=submit]').click()
        cy.get('pre').should('exist');
    });

    //it

    //it
});