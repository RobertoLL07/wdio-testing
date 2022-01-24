describe('E2E Testing - Help Center', () => {
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

    it('Should load help content', async () => {
        await $('.icon-cog').click()
        await $('#help_link').waitForExist()
        await $('#help_link').click()
        const title = await $('.span8 > h3')
        await title.waitForExist()
        await expect(title).toHaveText('How do I log into my account?')
        await $('*=transfer funds').click()
        await expect(title).toHaveText('How do I transfer funds?')
        await $('*=pay bills').click()
        await expect(title).toHaveText('How do I pay bills?')


	})
})