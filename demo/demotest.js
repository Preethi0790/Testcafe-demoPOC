import {Selector} from 'testcafe';

fixture `Getting started with TestCafe`
    .page `https://www.codecademy.com/login`

    test('My test', async t => {
        await t.typeText('#user_login', 'preethig701@gmail.com')
        await t.typeText('#login__user_password', 'codepass@123')
         .setNativeDialogHandler(() => true)
         await t.click('#user_submit')
     });