describe('E2E Tests - Transaction Filter', () => {
    it('Should log into application', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await $('#signin_button').waitForExist()
        $('#signin_button').click()
        await $('#login_form').waitForExist()
        await $('#user_login').setValue('username')
        await $('#user_password').setValue('password')
        await $('input[type="submit"]').click() 
        await $('.nav-tabs').waitForExist()
    })

    it('Transaction filter should work', async () => {
        await $('#account_activity_tab').click()
        const link = $('=Find Transactions') //cuando esta solo href 
        await link.getText()
        await link.getAttribute('href')
        await link.click()
        $('#aa_description').waitForExist()
        $('#aa_description').setValue('Test')
        $('button[type="submit"]').click()
        $('#filtered_transaction_for_account').waitForExist()
        const message = $('.well')
        expect(message).toHaveText('No results.')
	})
})