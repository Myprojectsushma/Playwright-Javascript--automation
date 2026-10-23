import{test, expect} from "@playwright/test";
import { TestConfig } from "../test.config";  
import { Homepage } from "../pages/Homepage"; 
import { CartPage } from "../pages/cartpage";
  

test.describe('Homepage flow @smoke @regression', () => {
  test('homepage product listing and cart flow @smoke', async ({ page }) => {
    const config = new TestConfig();
    const homepage = new Homepage(page);
    const cartpage = new CartPage(page);

    await page.goto(config.url);
    await expect(page).toHaveTitle(/STORE/i);

    await homepage.selectproduct('Samsung galaxy s6');
    await homepage.gotocartpage();
    await cartpage.verifyproductincart('Samsung galaxy s6');
    await cartpage.addplaceorder('sus', 'India', 'Delhi', '1234567890', '2', '2024');
    await cartpage.verifyorderplaced('Thank you for your purchase!');
  });
});