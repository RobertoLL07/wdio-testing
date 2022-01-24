import Base from "../Base";

class Navbar extends Base {
    get searchBox() {
        return $("#searchTerm");
    }
    get signInButton() {
        return $("#signin_button");
    }
    get insideNavbar() {
        return $(".nav-tabs");
    }
    get insideUserIcon() {
        return $(".icon-user");
    }
    get settingsButton() {
        return $(".icon-cog");
    }
    get logOutbutton() {
        return $("#logout_link");
    }
    get helpLink() {
        return $("#help_link");
    }
    async search(text) {
        await this.searchBox.waitForExist();
        await this.searchBox.setValue(text);
        await browser.keys("Enter");
    }
    async clickSignIn() {
        await this.signInButton.waitForExist();
        await this.signInButton.click();
    }
    async insideNavbarIsVisible() {
        await this.insideNavbar.waitForExist();
    }
    async clickUserIcon() {
        await this.insideUserIcon.waitForExist();
        await this.insideUserIcon.click();
    }
    async clickLogOutButton() {
        await this.logOutbutton.waitForExist();
        await this.logOutbutton.click();
    }
    async clickSettings() {
        await this.settingsButton.waitForExist();
        await this.settingsButton.click();
    }
    async clickHelp() {
        await this.helpLink.waitForExist();
        await this.helpLink.click();
    }
}

export default new Navbar();