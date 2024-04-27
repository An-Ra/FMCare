class loginPage {

    get inputEmail() { return cy.get('#ctl00_ContentPlaceHolder1_txtEmail') }
    get inputPassword() { return cy.get('#ctl00_ContentPlaceHolder1_txtpwd') }
    get loginButton() { return cy.get('#ctl00_ContentPlaceHolder1_btnLogin') }

    loginWithCredentials(email, password) {
        cy.visit('/Login.aspx')
        this.inputEmail.type(email)
        this.inputPassword.type(password)
        this.loginButton.click()
    }
}

export default new loginPage