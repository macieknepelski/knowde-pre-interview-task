import { CommonHelpers } from "./CommonHelpers";

export class CheckoutStepOnePage extends CommonHelpers {
  protected static selectors = {
    formInputs: {
      firstName: '[data-test="firstName"]',
      lastName: `[data-test="lastName"]`,
      zipPostalCode: `[data-test="postalCode"]`
    },
    cancelButton: '[data-test="cancel"]',
    continueButton: `[data-test="continue"]`
  };
  public static assertCheckoutForm() {
    Object.values(this.selectors.formInputs).forEach(formElement => {
      cy.get(formElement).should('be.visible').and('be.enabled');
    })
  }
  public static enterFirstName(firstName: string) {
    cy.get(this.selectors.formInputs.firstName)
      .type(firstName)
      .should('have.value', firstName);
  }
  public static enterLastName(lastName: string) {
    cy.get(this.selectors.formInputs.lastName)
      .type(lastName)
      .should('have.value', lastName);
  }
  public static enterPostalCode(zipPostalCode: string) {
    cy.get(this.selectors.formInputs.zipPostalCode)
      .type(zipPostalCode)
      .should('have.value', zipPostalCode);
  }
  public static clickContinue(){
    cy.get(this.selectors.continueButton)
      .should('be.enabled')
      .click();
  }
}