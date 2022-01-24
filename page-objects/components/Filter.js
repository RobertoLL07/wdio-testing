import Base from "../Base";

class InsideNavbar extends Base {
    get accountActivityTab() {
        return $("#account_activity_tab > a");
    }
    get filtersLink() {
        return $("#tabs > ul > li:nth-child(2) > a");
    }
    async clickAccountActivityTab() {
        await this.accountActivityTab.waitForExist();
        await this.accountActivityTab.click();
    }
    async clickFiltersLink() {
        await this.filtersLink.waitForExist();
        await this.filtersLink.click();
    }
}
export default new InsideNavbar();