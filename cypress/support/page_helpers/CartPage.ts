import { CommonHelpers } from "./CommonHelpers";

export class CartPage extends CommonHelpers {
  protected static selectors = {
    cartList: `div[class="cart_list"]`,
    cartFooter: `div[class="cart_footer"]`,
    continueShoppingButton: `[data-test="continue-shopping"]`,
    checkoutButton: `[data-test="checkout"]`,
    cartItem: `div[class="cart_item"]`,
    inventoryItemName: `[class="inventory_item_name"]`,
    inventoryItemDescription: `[class="inventory_item_desc"]`,
    ivnentoryItemPrice: `[class="inventory_item_price"]`,
    removeBackpackButton: `[data-test="remove-sauce-labs-backpack"]`
  }
  public static assertItemInCart(itemName: string, itemPrice: string) {
    cy.get(this.selectors.cartItem).filter(`:contains("${itemName}")`)
      .should('exist')
      .within(($cartItem) => {
        cy.get(this.selectors.ivnentoryItemPrice)
          .should('contain.text', itemPrice);
      })
  }
  public static clickCheckoutButton() {
    cy.get(this.selectors.checkoutButton)
      .click();
  }
}