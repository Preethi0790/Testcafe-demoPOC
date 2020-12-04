import LoginPage from '../pageObjects/loginPage'
import HomePage from '../pageObjects/homePage'
import { Selector } from 'testcafe';

// import xPathToCss from 'xpath-to-css';

const loginPage = new LoginPage();
const homePage = new HomePage();

fixture `Test suite for code academy login page`
    .page `https://www.codecademy.com/`
    .before(async t => {
        console.log('Test suite execution begins...');  
    })
    .beforeEach(async t => {
        console.log('Execution started for test')
        await t.setPageLoadTimeout(3000);
    })
    .afterEach(async t => {
        console.log('Execution completed for test')
    })
    .after(async t =>{
        console.log('Test suite execution completed successfully.')
    })

test('User with invalid Login credentials', async t => {
    await t.click(loginPage.home_sign_btn)
    await t.expect(loginPage.login_form.exists).ok()
    await loginPage.loggingPage("invalid user", "invalid password")
    // validating error message
    await t.expect(loginPage.invalid_login_error.innerText).contains('Invalid Login or password.')
})

test('User with valid Login credentials and logout', async t => {
    await t.click(loginPage.home_sign_btn)
    await t.expect(loginPage.login_form.exists).ok()
    await loginPage.loggingPage("preethig701@gmail.com", "codepass@123")
    // screenshot of the Home page
    await t.takeScreenshot({
        path: '/screenshots/loginpage.png',
        fullPage: true
    })
    // validating successfull login
    await t.expect(Selector('title').innerText).eql('Dashboard | Codecademy')
    // resize window 
    await t.resizeWindow(1366,768)
    // logout
    await t.click(homePage.user_icon)
    await t.click(homePage.logout_btn)
    await t.expect(loginPage.logIn_btn.exists).ok()
})

/*test.only('xpath to css converstion', async t => {
    const xpath = "'(//span[contains(text(), 'Log in')])[2]'"
    const css = xPathToCss(xpath)
    await t.click(css)
}); */