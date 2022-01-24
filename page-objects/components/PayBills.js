import Base from "../Base";

class PayBills extends Base {
    get payBillsTab() {
        return $("#pay_bills_tab");
    }
    get selectPayee() {
        return $("#sp_payee");
    }
    get selectAccount() {
        return $("#sp_account");
    }
    get amount() {
        return $("#sp_amount");
    }
    get date() {
        return $("#sp_date");
    }
    get description() {
        return $("#sp_description");
    }
    get payButton() {
        return $("#pay_saved_payees");
    }
    get message() {
        return $("#alert_content");
    }
    async clickOnPayBillsTab() {
        await this.payBillsTab.waitForExist();
        await this.payBillsTab.click();
    }
    async setValues(amount, date, description) {
        await this.amount.setValue(amount);
        await this.date.setValue(date);
        await this.description.setValue(description);
    }
    async clickOnPayButton() {
        await this.payButton.waitForExist();
        await this.payButton.click();
    }
}
export default new PayBills();