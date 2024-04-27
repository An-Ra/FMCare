import bookListPages from "./bookListPage"

class bookDetailPage {

    constructor() {
        this.bookListPage = bookListPages;
    }

    get bookTitle() { return cy.get('#ctl00_ContentPlaceHolder1_lblTitle') }
    get bookAuthor() { return cy.get('.book-author') }
    get bookSynopsys() { return cy.get('.book-synopsys') }
    get normalPrice() { return cy.get('#ctl00_ContentPlaceHolder1_lblNormalPrice') }
    get addToWishList() { return cy.get('.add-to-mylist > a') }
    get inputAddToCart() { return cy.get('#valTxtCopies') }
    get addToCartButton() { return cy.get('.add-to-cart > [type="submit"]') }

    addToCartDetailPage() {
        this.inputAddToCart.clear().type('3')
        this.addToCartButton.click()
        this.bookListPage.addToCartMessage.should('have.text', 'Added to Cart')
    }

    addToWishListDetailPage() {
        this.addToWishList.click()
        this.bookListPage.getIframe.should('have.attr', 'src').then((src) => {
            let trimmedSrc = src.replace("../../", "");
            cy.visit(trimmedSrc);
        });
        this.bookListPage.popUpSelectWishList.select('My Wish List')
        this.bookListPage.popUpAddButton.click()
        cy.go('back')
    }
}

export default new bookDetailPage