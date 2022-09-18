export class CommonHelpers {
  protected static texts = {
    sessionStorageUsernameKey: 'session-username',
  };
  public static assertSessionUsernameCookie(value: string) {
    this.assertCookieExists(this.texts.sessionStorageUsernameKey, value);
  }
  public static assertCookieExists(key: string, value: string) {
    cy.getCookie(key)
      .its('value')
      .should('eq', value);
  }
  public static assertUrl(expectedUrl: string) {
    cy.url().should('eq', expectedUrl);
  }
  public static assertTextOnPage(text: string) {
    cy.contains(text).should('exist');
  }
}