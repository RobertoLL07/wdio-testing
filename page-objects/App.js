class App {
    async openHomePage() {
        await browser.url('http://zero.webappsecurity.com/index.html')
    }

    async openLoginPage() {
        await browser.url('http://zero.webappsecurity.com/login.html')

    }

    async logout() {
        await browser.url('http://zero.webappsecurity.com/logout.html')

    }
}

export default new App()