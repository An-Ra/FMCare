class wishListPage {

    // WishList List Page
    get detailWishListButton() { return cy.xpath('//a[text()="View Details"]') }
    get queryAllBook() { return cy.get('div.book') }

    //WishList Detail Page
    get listBook() { return cy.get('[class="book w3-row"]') }
    get bookTitle() { return cy.get('.book-detail > .book-title') }
    get removeWishListButton() { return cy.xpath('//a[contains(@id,"lnkDelete")]') }

    verifyCartItem(name) {
        this.detailWishListButton.click()
        name !== '' ? this.bookTitle.contains(name) : this.bookTitle.should('be.visible')
    }

    cleaningWishList() {
        cy.visit('/MyList.aspx')
        this.detailWishListButton.click()
        cy.get('body').then(($el) => {
            if ($el.find('[class="book w3-row"]').length > 0) {
                this.removeWishListButton.each($element => {
                    $element.click();
                });
                cy.wait(5000);
                this.removeWishListButton.should('not.exist');
            } else {
                cy.log('Wish List is already empty');
            }
        })
    }

    removeWishList() {
        this.removeWishListButton.click()
    }

    verifyWishListIsEmpty() {
        this.listBook.should("not.exist")
    }
}

export default new wishListPage