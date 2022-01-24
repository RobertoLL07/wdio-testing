import Base from "../Base";

class FeedbackPage extends Base {
    get form() {
        return $("form");
    }
    get name() {
        return $("#name");
    }
    get email() {
        return $("#email");
    }
    get subject() {
        return $("#subject");
    }
    get comment() {
        return $("#comment");
    }
    get submitButton() {
        return $("input[type='submit']");
    }
    async formIsVisible() {
        await this.form.waitForExist();
    }
    async fillForm(name, email, subject, comment) {
        await this.name.setValue(name);
        await this.email.setValue(email);
        await this.subject.setValue(subject);
        await this.comment.setValue(comment);
    }
    async submitForm() {
        await this.submitButton.click();
    }
}
export default new FeedbackPage();