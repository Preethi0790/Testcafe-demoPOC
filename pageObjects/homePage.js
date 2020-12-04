import {Selector} from 'testcafe'

class HomePage {

    constructor(){
        this.user_icon = Selector('#dropdown-toggle')
        this.logout_btn = Selector('[href*="/sign_out"]')
    }
    
}

export default HomePage