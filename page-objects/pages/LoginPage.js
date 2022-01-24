import Base from '../Base'

class LoginPage extends Base {
    get loginForm(){
        return $('#login_form')
    }

    get usernameInput() {
        return $('#user_login')
    }

    get passwordInput() {
        return $('#user_password')
    }

    get submitButton() {
        return $('input[type="submit"]')
    }

    get error() {
        return $('.alert-error')
    }

    async formIsVisible() {
        await this.loginForm.waitForExist()
    }

    async fillForm(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
    }

    async submitForm() {
        await this.submitButton.click()
    }

    async login(username, password) {
        await this.loginForm.waitForExist()
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.submitButton.click()
    }
    
}

export default new LoginPage()