class Homepage {
  constructor(page) {
    this.page = page;
    this.productLink = (productName) => `//a[normalize-space()="${productName}"]`;
    this.addToCartButton = '//a[normalize-space()="Add to cart"]';
    this.cartLink = '//a[normalize-space()="Cart"]';
  }

  async selectproduct(productName) {
    const productLocator = this.page.locator(this.productLink(productName));
    await productLocator.waitFor({ state: 'visible', timeout: 15000 });

    this.page.once('dialog', async (dialog) => {
      if (dialog.message().includes('Product added')) {
        await dialog.accept();
      }
    });

    await productLocator.click();
    await this.page.locator(this.addToCartButton).waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator(this.addToCartButton).click();
  }

  async gotocartpage() {
    await this.page.locator(this.cartLink).click();
  }
}

module.exports = { Homepage };