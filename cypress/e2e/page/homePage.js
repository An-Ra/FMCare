class homePage {

    // Banner
    get banner() { return cy.get('#imagebanner') }

    // Recommendation Section
    get romanticComedyCollection() { return cy.xpath('//div[text()="Romantic Comedy"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get pastaCollection() { return cy.xpath('//div[text()="Romantic Comedy"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get thrillersCollection() { return cy.xpath('//div[text()="Thrillers"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get bedtimeAndDreamCollection() { return cy.xpath('//div[text()="Bedtime & Dreams"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get youngAdultFictionCollection() { return cy.xpath('//div[text()="Young Adult Fiction"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get mangaCollection() { return cy.xpath('//div[text()="Manga"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get stressManagementBeCollection() { return cy.xpath('//div[text()="Stress Management"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get autobiographyCollection() { return cy.xpath('//div[text()="Bestselling Autobiography"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get twentyOneCenturyCollection() { return cy.xpath('//div[text()="21st Century"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }
    get classicsCollection() { return cy.xpath('//div[text()="Classics"]/parent::div/following-sibling::div[@id="homefindoutmore"]/a') }

    // Book Categories Section
    get architectureCategory() { return cy.xpath('//a[text()="Architecture"]') }
    get artCategory() { return cy.xpath('//a[text()="Art"]') }
    get autobiographyCategory() { return cy.xpath('//a[text()="Biography & Autobiography"]') }
    get bodyMindSpiritCategory() { return cy.xpath('//a[text()="Body, Mind & Spirit"]') }
    get businessEconomicsCategory() { return cy.xpath('//a[text()="Business & Economics"]') }
    get childrenFictionCategory() { return cy.xpath('//a[text()="Children Fiction"]') }
    get comicsGraphicNovelsCategory() { return cy.xpath('//a[text()="Comics & Graphic Novels"]') }
    get computersCategory() { return cy.xpath('//a[text()="Computers"]') }
    get cookingCategory() { return cy.xpath('//a[text()="Cooking"]') }
    get craftsAndHobbiesCategory() { return cy.xpath('//a[text()="Crafts & Hobbies"]') }

    // OpenTrolley Bookstore Section
    get aboutUsMenu() { return cy.xpath('//a[text()="Tentang Kami"]') }
    get browseCategoriesMenu() { return cy.xpath('//a[text()="Browse 4000 Book Categories"]') }
    get termsAndConditionsMenu() { return cy.xpath('//a[text()="Syarat dan Ketentuan"]') }
    get facebookPage() { return cy.xpath('//a[text()="Facebook Page"]') }
    get twitterPage() { return cy.xpath('//a[text()="Twitter Account"]') }
    get instagramPage() { return cy.xpath('//a[text()="Instagram"]') }
    get openTrolleySingaporePage() { return cy.xpath('//a[text()="OpenTrolley Bookstore Singapore"]') }
    get openTrolleyMalaysia() { return cy.xpath('//a[text()="OpenTrolley Bookstore Malaysia"]') }

    // Information Section
    get howToShopMenu() { return cy.xpath('//a[text()="Cara Berbelanja"]') }
    get shippingCostAndTimesMenu() { return cy.xpath('//a[text()="Biaya dan Waktu Pengiriman"]') }
    get paymentMethodMenu() { return cy.xpath('//a[text()="Metode Pembayaran"]') }
    get howToPackBooksMenu() { return cy.xpath('//a[text()="Cara Pengemasan Buku"]') }
    get trackMyOrdersMenu() { return cy.xpath('//a[text()="Track My Orders"]') }
    get editProfileMenu() { return cy.xpath('//a[text()="Edit Profile"]') }
    get myAddressBookMenu() { return cy.xpath('//a[text()="My Address Book"]') }
    get myListMenu() { return cy.xpath('//a[text()="My Lists"]') }
    get shoppingCartMenuFooter() { return cy.xpath('//a[text()="Shopping Cart"]') }
    get faqMenu() { return cy.xpath('//a[text()="Frequently Asked Questions"]') }
    get contactUsMenu() { return cy.xpath('//a[text()="Contact Us"]') }
    get bookTitleByIndex() { return cy.get(`#ctl00_ContentPlaceHolder1_rptBooks_ctl00_aTitle`) }

    clickRomanticComedyCollection() {
        this.romanticComedyCollection.click()
    }

    clickArchitectureCategory() {
        this.architectureCategory.click()
    }
}

export default new homePage