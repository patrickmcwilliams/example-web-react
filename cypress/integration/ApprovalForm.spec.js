const validateCurrencyInput = (fieldId)=>{
    const id = '#'+fieldId;
    const errorId = id+'_error';

    cy.get(id).click().type('bb$100nn,000ll.00').should('have.value','$100,000.00');
    cy.get(errorId).should('not.be.visible');
    cy.get(id).clear();
    cy.get(id).click().type('100000.00').should('have.value','100000.00');
    cy.get(errorId).should('not.be.visible');
};

const validateCurrencInputErrorHint=(fieldId)=>{
    const id = '#'+fieldId;
    const errorId = id+'_error';

    cy.get(id).click().type('1$');
    cy.get(errorId).should('be.visible');
    cy.get(id).clear();
    cy.get(id).click().type('10,0000.00');
    cy.get(errorId).should('be.visible');
    cy.get(id).clear();
    cy.get(id).click().type('100000.0');
    cy.get(errorId).should('be.visible');
};

describe('Validate currency inputs',()=>{
    it('only allows $?111,?111.11 format', ()=>{
        cy.visit('localhost:3000');
        validateCurrencyInput('investment_amount');
        validateCurrencyInput('net_worth');
        validateCurrencyInput('income');
    })
    it('should show error hints with bad format', ()=>{
        cy.visit('localhost:3000');
        validateCurrencInputErrorHint('investment_amount');
        validateCurrencInputErrorHint('net_worth');
        validateCurrencInputErrorHint('income');
    })
});

describe('Validate text type input',()=>{
    it('allows all characters', ()=>{
        cy.visit('localhost:3000');
        cy.get('#investment_type').click().type('stock123').should('have.value','stock123');
        cy.get('#investment_type_error').should('not.be.visible');
    })
});

describe('Validate credit score type input',()=>{
    it('allows 300-850 only', ()=>{
        cy.visit('localhost:3000');
        cy.get('#credit_score').click().type('350');
        cy.get('#credit_score_error').should('not.be.visible');
        cy.get('#credit_score').clear();
        cy.get('#credit_score').click().type('800');
        cy.get('#credit_score_error').should('not.be.visible');
        cy.get('#credit_score').clear();
    })
    it('does not allow < 300 or >850>', ()=>{
        cy.visit('localhost:3000');
        cy.get('#credit_score').click().type('200');
        cy.get('#credit_score_error').should('be.visible');
        cy.get('#credit_score').clear();
        cy.get('#credit_score').click().type('900');
        cy.get('#credit_score_error').should('be.visible');
        cy.get('#credit_score').clear();
    })
});

describe('Validate form',()=>{
    const fillForm = ()=>{
        cy.visit('localhost:3000');
        cy.get('#investment_amount').click().type('$1,000.00');
        cy.get('#form_help').should('be.visible');
        cy.get('#form_error').should('not.be.visible');
        cy.get('#submit_button').should('be.disabled');
        cy.get('#investment_type').click().type('stocks');
        cy.get('#form_help').should('be.visible');
        cy.get('#form_error').should('not.be.visible');
        cy.get('#submit_button').should('be.disabled');
        cy.get('#net_worth').click().type('$1,000,000.00');
        cy.get('#form_help').should('be.visible');
        cy.get('#form_error').should('not.be.visible');
        cy.get('#submit_button').should('be.disabled');
        cy.get('#income').click().type('$100,000.00');
        cy.get('#form_help').should('be.visible');
        cy.get('#form_error').should('not.be.visible');
        cy.get('#submit_button').should('be.disabled');
        cy.get('#credit_score').click().type('800');
        cy.get('#form_help').should('not.be.visible');
        cy.get('#form_error').should('not.be.visible');
        cy.get('#submit_button').should('not.be.disabled');
    };
    it('diasables submit until all fields entered correctly', ()=>{
        fillForm();
    });

    it('disables submit when form is filled but has errors', ()=>{
        fillForm();
        cy.get('#credit_score').clear().click().type('200');
        cy.get('#form_help').should('be.visible');
        cy.get('#form_error').should('be.visible');
        cy.get('#submit_button').should('be.disabled');
    });

    it('submits and gets approved', ()=>{
        fillForm();
        cy.get('#submit_button').click();
        cy.url().should('include', 'success');
    });

    it('submits and gets denied by credit', ()=>{
        fillForm();
        cy.get('#credit_score').clear().click().type('350')
        cy.get('#submit_button').click();
        cy.url().should('include', 'disqualify');
    });

    it('submits and gets denied by investment and income', ()=>{
        fillForm();
        cy.get('#net_worth').clear().click().type('1000000000000')
        cy.get('#investment_amount').clear().click().type('20001')
        cy.get('#submit_button').click();
        cy.url().should('include', 'disqualify');
    });

    it('submits and gets denied by investment and net worth', ()=>{
        fillForm();
        cy.get('#income').clear().click().type('1000000000000')
        cy.get('#investment_amount').clear().click().type('30001')
        cy.get('#submit_button').click();
        cy.url().should('include', 'disqualify');
    });

    it('submits and gets denied by investment amount', ()=>{
        fillForm();
        cy.get('#investment_amount').clear().click().type('9000000')
        cy.get('#submit_button').click();
        cy.url().should('include', 'disqualify');
    });
});
