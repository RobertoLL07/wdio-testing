
import App from '../page-objects/App'
import { speedy, short, flash, godspeed } from '../lib/timeouts'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Test - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', async () => {
        // await browser.url('http://zero.webappsecurity.com/index.html')
        await App.openHomePage()

        // const button = $('#signin_button')
        // button.waitForExist
        // await $('#signin_button').waitForExist() // alternativa para declarar el wait to exist de arriba
        // $('#signin_button').click()
        await Navbar.clickSingIn()

        // await $('#login_form').waitForExist()
        // await $('#user_login').setValue('Invalid user')
        // await $('#user_password').setValue('Invalid Pass')
        // await $('input[type="submit"]').click()  // ejemplo si el boton no tiene "id" se puede usar el tipo ejemplo ...input[type=""]
        await LoginPage.formIsVisible()
        await LoginPage.fillForm('invalid username', 'invalid password')
        await LoginPage.submitForm()

        //const error = await $('.alert-error')  // cuando es una clase se pone "."
        const error = LoginPage.error
        await expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await $('#signin_button').waitForExist()
        $('#signin_button').click()

        // await $('#login_form').waitForExist()
        // await $('#user_login').setValue('username')
        // await $('#user_password').setValue('password')
        // await $('input[type="submit"]').click() 
        await LoginPage.formIsVisible()
        await LoginPage.fillForm('username', 'password')
        await LoginPage.submitForm()

        // await $('.nav-tabs').waitForExist()
        await Navbar.insideNavBarIsVisible()

    })

    it('Should logout from app', async () => {
        // await $('.icon-user').waitForExist()
        // $('.icon-user').click()
        // await $('#logout_link').waitForExist()
        // $('#logout_link').click()
        await App.logout()
        // await $('#pages-nav').waitForExist()
        await Navbar.signInButtonIsVisible()
    })
})