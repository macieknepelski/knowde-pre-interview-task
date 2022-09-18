import { CommonHelpers } from "./CommonHelpers";

export class CheckoutStepTwoPage extends CommonHelpers {
  protected static selectors = {
    cartList: `div[class="cart_list"]`,
    summaryInfo: `div[class="summary_info"]`,
    cancelButton: `[data-test="cancel"]`,
    finishButton: `[data-test="finish"]`
  }
  public static clickFinishButton(){
    cy.get(this.selectors.finishButton)
      .click();
  }
}