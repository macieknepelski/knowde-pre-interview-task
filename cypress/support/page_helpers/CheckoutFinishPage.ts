import { CommonHelpers } from "./CommonHelpers";

export class CheckoutFinishPage extends CommonHelpers {
  protected static texts = {
    ...CommonHelpers.texts,
    thankYouForYourOrder: `THANK YOU FOR YOUR ORDER`
  };
  protected static selectors = {
    backToProducts: `[data-test="back-to-products"]`
  }
  public static assertThankYouForYourOrder() {
    this.assertTextOnPage(this.texts.thankYouForYourOrder);
  }
}