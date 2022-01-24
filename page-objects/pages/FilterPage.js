import Base from "../Base";

class FiltersPage extends Base {
    get descriptionInput() {
        return $("#aa_description");
    }
    get fromDate() {
        return $("#aa_fromDate");
    }
    get toDate() {
        return $("#aa_toDate");
    }
    get fromAmount() {
        return $("#aa_fromAmount");
    }
    get toAmount() {
        return $("#aa_toAmount");
    }
    get type() {
        return $("#aa_type");
    }
    get submitButton() {
        return $('button[type="submit"]');
    }
    get resultsTable() {
        return $("#filtered_transactions_for_account");
    }
    get message() {
        return $(".well");
    }
    get transactions() {
        return $("#filtered_transactions_for_account");
    }
    async fillDescription(text, fromDate, toDate, fromAmount, toAmount, type) {
        await this.descriptionInput.waitForExist();
        await this.descriptionInput.setValue(text);
        await this.fromDate.waitForExist();
        await this.fromDate.setValue(fromDate);
        await this.toDate.waitForExist();
        await this.toDate.setValue(toDate);
        await this.fromAmount.waitForExist();
        await this.fromAmount.setValue(fromAmount);
        await this.toAmount.waitForExist();
        await this.toAmount.setValue(toAmount);
        await this.type.waitForExist();
        await this.type.selectByVisibleText(type);
    }
    async submitFilter() {
        await this.submitButton.click();
    }
    async resultsTableIsVisible() {
        await this.resultsTable.waitForExist();
    }
}
export default new FiltersPage();