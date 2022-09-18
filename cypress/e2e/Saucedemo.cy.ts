import { LoginPage, InventoryPage, CartPage, CheckoutStepOnePage, CheckoutStepTwoPage, CheckoutFinishPage } from "../support/page_helpers";
import * as testData from "../fixtures/saucedemo.json";

describe(`Saucedemo`, () => {
  Object.entries(testData.resolutions).forEach(([resolution, { width, height }]) => {
    context(`${resolution} - ${width} x ${height}`, () => {
      beforeEach(() => {
        cy.viewport(width, height)
        cy.visit(testData.urls.loginPage);
        LoginPage.assertLoginPageElements();
      })
      it('TC01: Login form validation', () => {
        LoginPage.clickLoginButton();
        LoginPage.assertMissingUsernameErrorDisplayed();
      });
      Object.entries(testData.credentials).forEach(([id, { login, password }]) => {
        it(`TC02.${id}: Success Login - ${login}`, () => {
          LoginPage.enterLogin(login);
          LoginPage.enterPassword(password);
          LoginPage.clickLoginButton();
          LoginPage.assertLoginSuccessful();
          InventoryPage.assertUrl(testData.urls.inventoryPage);
          InventoryPage.assertSessionUsernameCookie(login)
          InventoryPage.assertInventoryPageElements();
        });
      });
      it(`TC03: Success Order`, () => {
        const { login, password } = testData.credentials[1];
        LoginPage.enterLogin(login);
        LoginPage.enterPassword(password);
        LoginPage.clickLoginButton();
        LoginPage.assertLoginSuccessful();
        InventoryPage.assertUrl(testData.urls.inventoryPage);
        InventoryPage.assertSessionUsernameCookie(login)
        InventoryPage.assertInventoryPageElements();
        InventoryPage.addBackpackToCart();
        InventoryPage.assertShoppingCartCounter(1);
        InventoryPage.goToCart()
        CartPage.assertUrl(testData.urls.cartPage);
        CartPage.assertItemInCart(testData.targetInventoryItem.name, testData.targetInventoryItem.price);
        CartPage.clickCheckoutButton()
        CheckoutStepOnePage.assertUrl(testData.urls.checkoutStepOne);
        CheckoutStepOnePage.assertCheckoutForm();
        CheckoutStepOnePage.enterFirstName(testData.checkoutFormData.firstName);
        CheckoutStepOnePage.enterLastName(testData.checkoutFormData.lastName);
        CheckoutStepOnePage.enterPostalCode(testData.checkoutFormData.zipPostalCode);
        CheckoutStepOnePage.clickContinue();
        CheckoutStepTwoPage.assertUrl(testData.urls.checkoutStepTwo);
        CheckoutStepTwoPage.clickFinishButton()
        CheckoutFinishPage.assertThankYouForYourOrder();
      })
    })
  })
})