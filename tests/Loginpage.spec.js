import{test, expect} from "@playwright/test";
import { TestConfig } from "../test.config";  
import { Homepage } from "../pages/Homepage"; 
import { Loginpage } from "../pages/loginpage";
import { CartPage } from "../pages/cartpage";
const DataProvider = require('../utils/dataProvider.js').default;

test.describe('Login flow @smoke @regression', () => {
  test('login with valid user credentials @smoke', async ({ page }) => {
    const config = new TestConfig();
    const login = new Loginpage(page);

    await page.goto(config.url);
    await expect(page).toHaveTitle(/STORE/i);
    await login.logindetails(config.username, config.password);
  });

  test('login with data provider values @regression', async ({ page }) => {
    const data = DataProvider.getTestDataFromJson('./testdata/logindata.json');
    const login = new Loginpage(page);

    const validUser = data[0];
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle(/STORE/i);
    await login.logindetails(validUser.username, validUser.password);
  });
});

test("Login test", async({page})=>{
const config = new TestConfig();
config.url;
await page.goto(config.url);
await expect(page).toHaveTitle(/STORE/i);

  const login = new Loginpage(page);
  await login.logindetails(config.username, config.password);

  const homepage = new Homepage(page);
  await homepage.selectproduct('Samsung galaxy s6');
  await homepage.gotocartpage();

  const cartpage = new CartPage(page);
  await cartpage.verifyproductincart('Samsung galaxy s6');
  await cartpage.addplaceorder('sus', 'India', 'Delhi', '1234567890', '2', '2024');
  await cartpage.verifyorderplaced('Thank you for your purchase!');         
})
