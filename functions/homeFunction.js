import HomePage from '../pageObjects/loginPage';
import {t} from 'testcafe';

const homePage = new HomePage();

class CommonFunc{
    async clickOnElement(element: Selector){
        await t.click(element)
    }

    async enterData(element: Selector, text: string) {
        await t.typeText(element, text)
    }
}

export default CommonFunc