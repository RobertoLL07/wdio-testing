describe('E2E Tests - Feedback', () => {
    it('Should load feedback form', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await $('#feedback').waitForExist()
        $('#feedback').click()
        await $('form').waitForExist()
    })

    it('Should sumbit feedback form', async () => {
        await $('#name').setValue('Name')
        await $('#email').setValue('test@test.com')
        await $('#subject').setValue('Subjects')
        await $('#comment').setValue('Just a message')
        await $('input[type="submit"]').click()
        await expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})