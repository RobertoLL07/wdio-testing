describe('E2E Search', () => {
    it('Should load homepage', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await $('#searchTerm').waitForExist()
    })

    it('Should sumbit searchbox', async () => {
        await $('#searchTerm').setValue('bank')
        browser.keys('Enter')
        const resultsTitle = $('h2')
        resultsTitle.waitForExist()
        await expect(resultsTitle).toHaveText('Search Results:')
    })
})