import {Selector, t} from 'testcafe'

export default class LoginPage {
    constructor(){
        this.home_sign_btn = Selector('a[href*="/login?"]').nth(1)
        this.login_form = Selector('#loginForm')
        this.username = Selector('#user_login')
        this.password = Selector('#login__user_password')
        this.logIn_btn = Selector('#user_submit')
        this.forgot_password = Selector('[href*="/secret/new"]')
        this.invalid_login_error = Selector('ul[class*=fieldErrors]')
    }
    
/* async login (){
await t
.click(this.home_sign_btn)
}*/

async loggingPage (usrname, passwd){
await t 
.typeText(this.username, usrname)
.typeText(this.password, passwd)
.click(this.logIn_btn)
   }
}