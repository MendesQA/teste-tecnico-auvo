export class CheckoutPage {
  
  constructor(page) {
    this.page = page;
    this.addBackpackButton = page.locator("[name='add-to-cart-sauce-labs-backpack']");
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator("[name='checkout']");
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator("[name='postalCode']");
    this.continueButton = page.locator('[data-test="continue"][name="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.checkoutCompleteTitle = page.locator("[data-test='secondary-header'] > span");
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async getCheckoutCompleteTitle() {
    return this.checkoutCompleteTitle.textContent();
  }
}
