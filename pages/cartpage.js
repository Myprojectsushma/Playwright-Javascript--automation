class CartPage {
  constructor(page) {
    this.page = page;
    this.productName = 'td:nth-child(2)';
    this.placeOrderButton = 'button:has-text("Place Order")';
    this.name = '#name';
    this.country = '#country';
    this.city = '#city';
    this.creditcard = '#card';
    this.month = '#month';
    this.year = '#year';
    this.purchaseButton = 'button:has-text("Purchase")';
    this.orderConfirmation = 'h2:has-text("Thank you for your purchase!")';
  }

  async verifyproductincart(productname) {
    const productText = await this.page.locator(this.productName).textContent();
    if (!productText || !productText.includes(productname)) {
      throw new Error(`Product ${productname} not found in cart.`);
    }
  }

  async addplaceorder(name, country, city, creditcard, month, year) {
    await this.page.locator(this.placeOrderButton).click();
    await this.page.locator(this.name).fill(name);
    await this.page.locator(this.country).fill(country);
    await this.page.locator(this.city).fill(city);
    await this.page.locator(this.creditcard).fill(creditcard);
    await this.page.locator(this.month).fill(month);
    await this.page.locator(this.year).fill(year);
    await this.page.locator(this.purchaseButton).click();
  }

  async verifyorderplaced(message) {
    await this.page.locator(this.orderConfirmation).waitFor();
    const text = await this.page.locator(this.orderConfirmation).textContent();
    if (!text || !text.includes(message)) {
      throw new Error(`Expected confirmation message not found: ${message}`);
    }
  }
}

module.exports = { CartPage };