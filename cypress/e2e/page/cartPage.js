class cartPage {

    // Cart With Item
    get listBookCard() { return cy.get('#tblRepeater') }
    get bookTitle() { return cy.get('.book-detail > .book-title') }
    get bookPrice() { return cy.xpath('//div[contains(@class,"price")]/span[not(contains(@id,"Currency"))]') }
    get bookQty() { return cy.get('#ctl00_ContentPlaceHolder1_rptCart_ctl01_txtQty') }
    get priceSubTotal() { return cy.get('#ctl00_ContentPlaceHolder1_rptCart_ctl01_lblSubTotal') }
    get deleteMarkedItem() { return cy.get('#ctl00_ContentPlaceHolder1_btnDelete') }
    get inputQtyItem() { return cy.get('#ctl00_ContentPlaceHolder1_btnSave') }
    get emptyCartButton() { return cy.get('#ctl00_ContentPlaceHolder1_BtnEmptyCart') }

    // Empty Cart
    get emptyCartMessage() { return cy.get('.empty-cart') }
    get startShoppingButton() { return cy.get('.checkout > a') }

    verifyNameAndQtyCartItem(name, qty) {
        name !== '' ? this.bookTitle.contains(name) : this.bookTitle.should('be.visible')
        this.bookQty.should('have.value', qty)
    }

    updateQty(qty) {
        this.bookQty.clear().type(qty)
        this.inputQtyItem.click()
    }

    emptyCart() {
        this.emptyCartButton.click()
    }

    verifyCartIsEmpty() {
        this.emptyCartMessage.should("be.visible")
        this.startShoppingButton.should("be.visible")
    }

    cleaningCart() {
        cy.visit('/ShoppingCart.aspx')
        cy.get('body').then(($el) => {
            if ($el.find('#ctl00_ContentPlaceHolder1_BtnEmptyCart').length > 0) {
                this.emptyCartButton.click()
                this.emptyCartMessage.should("be.visible")
                this.startShoppingButton.should("be.visible")
            } else {
                cy.log('Cart is already empty');
            }
        })

    }

}

export default new cartPage