class bookListPage {

    // Filters
    get searchFilterButton() { return cy.get('.filters-title.collapsible.arrow_down') }
    get sortingButton() { return cy.get('[name="ctl00$ContentPlaceHolder1$ddlsort"]') }
    get paginationPage() { return cy.get('[name="ctl00$ContentPlaceHolder1$ddlView"]') }

    // List Book by Index
    get bookTitleByIndex() { return (index) => cy.xpath(`//*[@id='ctl00_ContentPlaceHolder1_UpdatePanel1']/div[@class='book w3-row'][${index}]//div[@class='book-title']/a`) }
    get normalPriceByIndex() { return (index) => cy.xpath(`//*[@id='ctl00_ContentPlaceHolder1_UpdatePanel1']/div[@class='book w3-row'][${index}]//div[@class='price-after-disc']/span[contains(@id,'NormalPrice')]`) }
    get inputAddToCardByIndex() { return (index) => cy.xpath(`//*[@id='ctl00_ContentPlaceHolder1_UpdatePanel1']/div[@class='book w3-row'][${index}]//div[@class='add-to-cart']/div/input[contains(@name,'txtCopiesSearch')]`) }
    get addToCartButtonByIndex() { return (index) => cy.xpath(`//*[@id='ctl00_ContentPlaceHolder1_UpdatePanel1']/div[@class='book w3-row'][${index}]//div[@class='add-to-cart']/div/input[contains(@name,'btnAddToCartSearch')]`) }
    get wishListButtonByIndex() { return (index) => cy.xpath(`//*[@id='ctl00_ContentPlaceHolder1_UpdatePanel1']/div[@class='book w3-row'][${index}]//div[@class='add-to-mylist']/a`) }

    // List Book by Text
    get bookTitleByText() { return (text) => cy.xpath(`//a[contains(@id,'aTitle') and contains(text(),'${text}')]`) }
    get normalPriceByText() { return (text) => cy.xpath(`//a[contains(@id,'aTitle') and contains(text(),'${text}')]/parent::div/parent::div/following-sibling::div/div[@class='price-after-disc']/span[contains(@id,'NormalPrice')]`) }
    get inputAddToCardByText() { return (text) => cy.xpath(`//a[contains(@id,'aTitle') and contains(text(),'${text}')]/parent::div/parent::div/following-sibling::div//div[@class='add-to-cart']/div/input[contains(@name,'txtCopiesSearch')]`) }
    get addToCartButtonByText() { return (text) => cy.xpath(`//a[contains(@id,'aTitle') and contains(text(),'${text}')]/parent::div/parent::div/following-sibling::div//div[@class='add-to-cart']/div/input[contains(@name,'btnAddToCartSearch')]`) }
    get wishListButtonByText() { return (text) => cy.xpath(`//a[contains(@id,'aTitle') and contains(text(),'${text}')]/parent::div/parent::div/following-sibling::div//div[@class='add-to-mylist']/a`) }

    // Add To Cart Message
    get addToCartMessage() { return cy.xpath("//div[contains(@id,'AddedToCartMsg') and @style='display: block;']") }

    // Query All
    get priceListBooks() { return cy.get('span[id*="lblNormalPrice"]') }

    // iframe
    get getIframe() { return cy.get('#myModalNew > iframe')}
    get getContentIframe() { return cy.get('#myModalNew > iframe').its('0.contentDocument.body') }

    // Popup Wish List
    get popUpWishList() { return cy.get('#modalPopupNew') }
    get popUpCancelButton() { return cy.get('#btnCancel') }
    get popUpAddButton() { return cy.get('#btnSubmit') }
    get popUpSelectWishList() { return cy.get('#ddlWishlistType') }

    confirmAlert() {
        cy.on('window:confirm', (text) => {
            expect(text).to.eq('alert text')
            done() 
        })
    }

    rejectAlert() {
        cy.on("window:confirm", (s) => {
            return false;
        });
    }

    clickTitleByIndex(index) {
        let storeText
        this.bookTitleByIndex(index).invoke('text').then((text) => this.storedText = text)
        this.bookTitleByIndex(index).click()
        return storeText
    }

    addToCartByIndex(index) {
        this.inputAddToCardByIndex(index).clear().type('3')
        this.addToCartButtonByIndex(index).click()
        cy.wait(2000)
        this.addToCartMessage.should('have.text', 'Added to Cart')
    }

    addToWishListByIndex(index) {
        this.wishListButtonByIndex(index).click()
        this.getIframe.should('have.attr', 'src').then((src) => {
            let trimmedSrc = src.replace("../../", "");
            cy.visit(trimmedSrc);
        });
        this.popUpSelectWishList.select('My Wish List')
        this.popUpAddButton.click()
        cy.go('back')
    }

    verifySortBookAsc() {
        this.sortingButton.select('Price Low To High')
        cy.wait(5000)
        this.priceListBooks.then($prices => {
            const prices = $prices.toArray().map(price => parseFloat(price.innerText.replace(/[^\d.-]/g, '')));
            for (let i = 0; i < prices.length - 1; i++) {
                expect(prices[i]).to.be.at.most(prices[i + 1]);
            }
        })
    }
}
export default new bookListPage()
