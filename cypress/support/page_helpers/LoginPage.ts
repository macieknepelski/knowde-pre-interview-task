import { CommonHelpers } from "./CommonHelpers";

export class LoginPage extends CommonHelpers {
  protected static selectors = {
    pageLayout: {
      loginLogo: `div[class="login_logo"]`,
      loginForm: `div[class="login-box"]`,
      botLogo: `div[class="bot_column"]`,
      credentialsFooter: `div[class="login_credentials_wrap"]`,
      usernameField: '[data-test="username"]',
      passwordField: '[data-test="password"]',
      loginButton: '[data-test="login-button"]',
    },
    errorMessage: '[data-test="error"]'
  };
  protected static texts = {
    ...CommonHelpers.texts,
    missingUsernameErrorMessage: "Username is required",
  }
  public static assertLoginPageElements() {
    for (let elementSelector of Object.values(this.selectors.pageLayout)) {
      cy.get(elementSelector).should('be.visible');
    }
  }
  public static enterLogin(login: string) {
    cy.get(this.selectors.pageLayout.usernameField)
      .type(login)
      .should('have.value', login);
  }
  public static enterPassword(password: string) {
    cy.get(this.selectors.pageLayout.passwordField)
      .type(password)
      .should('have.value', password);
  }
  public static clickLoginButton() {
    cy.get(this.selectors.pageLayout.loginButton)
      .should('be.enabled')
      .click()
  }
  public static assertLoginSuccessful() {
    cy.get(this.selectors.errorMessage).should('not.exist');
  }
  public static assertMissingUsernameErrorDisplayed() {
    cy.get(this.selectors.errorMessage)
      .contains(this.texts.missingUsernameErrorMessage)
  }
}