class headerMenu {

    // Header Menu
    get loginLogoutMenu() { return cy.get('#ctl00_CtrlHeader_lnkLogout') }
    get tracksOrderMenu() { return cy.xpath('//a[text()="Track Orders"]') }
    get myAccountMenu() { return cy.xpath('//a[text()="My Account"]') }
    get myBookListMenu() { return cy.xpath('//a[text()="My Book Lists"]') }
    get shoppingCartMenu() { return cy.get('#ctl00_CtrlHeader_a2') }
    get cartCounter() { return cy.get('#ctl00_CtrlHeader_lblCartCount') }
    get searchField() { return cy.get('#ctl00_CtrlHeader_txtSearchText') }
    get searchButton() { return cy.get('.search-icon-container') }

    clickLoginMenu() {
        this.loginLogoutMenu.click()
    }
    clickCartMenu() {
        this.shoppingCartMenu.click()
    }
    clickMyBookList() {
        this.myBookListMenu.click()
    }

    searchBookByName(name) {
        this.searchField.type(name)
        this.searchButton.click()
    }

}

export default new headerMenu