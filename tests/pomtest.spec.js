const { test } = require('@playwright/test');
const { Loginpage } = require('../pages/loginpage');
const { Homepage } = require('../pages/Homepage');
const { CartPage } = require('../pages/cartpage');

test('Login test', async ({ page }) => {
  const login = new Loginpage(page);

  await login.gotoLoginpage();
  await login.logindetails('pavanol', 'test@123');

  const homepage = new Homepage(page);
  await homepage.selectproduct('Samsung galaxy s6');
  await homepage.gotocartpage();

  const cartpage = new CartPage(page);
  await cartpage.verifyproductincart('Samsung galaxy s6');
  await cartpage.addplaceorder('sus', 'India', 'Delhi', '1234567890', '2', '2024');
  await cartpage.verifyorderplaced('Thank you for your purchase!');
});