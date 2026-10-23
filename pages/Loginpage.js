class Loginpage {
  constructor(page) {
    this.page = page;
    this.loginlink = '#login2';
    this.usernameinput = '#loginusername';
    this.passwordinput = '#loginpassword';
    this.button = '//button[normalize-space()="Log in"]';
  }

  async gotoLoginpage() {
    await this.page.goto('https://demoblaze.com/index.html');
  }

  async logindetails(username, password) {
    await this.page.locator(this.loginlink).click();
    await this.page.locator(this.usernameinput).fill(username);
    await this.page.locator(this.passwordinput).fill(password);
    await this.page.locator(this.button).click();
  }
}

module.exports = { Loginpage };