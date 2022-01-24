import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Currency Exhchange', () => {
    it('Should log into application', async () => {
        await App.openLoginPage()
        // await LoginPage.formIsVisible()
        // await LoginPage.fillForm('username', 'password')
        // await LoginPage.submitForm()
        await LoginPage.login('username', 'password')
        await Navbar.insideNavBarIsVisible()
    })

    it('Should make currency exchange', async () => {
        await $('#pay_bills_tab').waitForExist()
        await $('#pay_bills_tab').click()
        const link = await $('=Purchase Foreign Currency')
        await link.getText()
        await link.getAttribute('href')
        await link.click()
        const currencySelect = await $('#pc_currency')
        await currencySelect.waitForExist()
        await currencySelect.selectByAttribute('value', 'GBP')
        await $('#pc_amount').setValue('500')
        await $('#pc_inDollars_true').click()
        await $('#purchase_cash').click()
        const message = await $('#alert_content')
        await expect(message).toHaveText('Foreign currency cash was successfully purchased.')
    })
})