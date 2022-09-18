import { CommonHelpers } from "./CommonHelpers";

export class InventoryPage extends CommonHelpers {
  public static selectors = {
    pageLayout: {
      menuButton: `div[class="bm-burger-button"]`,
      appLogo: `div[class="app_logo"]`,
      shoppingCartButton: `div[id="shopping_cart_container"]`,
      lowerHeader: `div[class="header_secondary_container"]`,
      productSortContainer: `[data-test="product_sort_container"]`,
      inventoryContainer: `div[id="inventory_container"]`,
      footerTwitter: `footer li[class="social_twitter"]`,
      footerFacebook: `footer li[class="social_facebook"]`,
      footerLinkedin: `footer li[class="social_linkedin"]`,
      footerCopyright: `footer div[class="footer_copy"]`,
      footerRobot: `footer img[class="footer_robot"]`
    },
    backpackAddToCardButton: `[data-test="add-to-cart-sauce-labs-backpack"]`,
    backpackRemoveFromCardButton: `[data-test="remove-sauce-labs-backpack"]`
  };
  public static assertInventoryPageElements() {
    for (let elementSelector of Object.values(this.selectors.pageLayout)) {
      cy.get(elementSelector).should('be.visible');
    }
  }
  public static addBackpackToCart() {
    cy.get(this.selectors.backpackAddToCardButton)
      .click();
  }
  public static assertShoppingCartCounter(expectedCount: number) {
    cy.get(this.selectors.pageLayout.shoppingCartButton)
      .should('contain.text', expectedCount)
  }
  public static goToCart() {
    cy.get(this.selectors.pageLayout.shoppingCartButton)
      .click();
  }
  public static addSauceLabsBackpackToCard(){
    cy.get(this.selectors.backpackAddToCardButton)
      .click()
      .should('not.exist');
    cy.get(this.selectors.backpackRemoveFromCardButton)
      .should('exist');
  }
}