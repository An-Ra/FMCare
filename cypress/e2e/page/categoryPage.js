class categoryPage {

    // Main Category
    get antiqueCategory() { return cy.get('[name="antiques-collectibles"]') }
    get architectureCategory() { return cy.get('[name="architecture"]') }
    get artCategory() { return cy.get('[name="art"]') }
    get biblesCategory() { return cy.get('[name="bibles"]') }
    get autobiographyCategory() { return cy.get('[name="biography-autobiography"]') }

    //Sub Category
    get bestSellerCategory() { return cy.get('#aBestsellers') }
    get newReleaseCategory() { return cy.get('#aNewReleases') }

    clickMainCategory(category) {
        switch (category.toLowerCase()) {
            case 'antique':
                this.antiqueCategory.click()
                break;
            case 'architecture':
                this.architectureCategory.click()
                break;
            case 'art':
                this.artCategory.click()
                break;
            case 'bibles':
                this.biblesCategory.click()
                break;
            case 'autobiography':
                this.autobiographyCategory.click()
                break;
            default:
                this.antiqueCategory.click()
                break;
        }
    }

    clickSubCategory(category) {
        switch (category.toLowerCase()) {
            case 'bestseller':
                this.bestSellerCategory.click()
                break;
            case 'newrelease':
                this.newReleaseCategory.click()
                break;
            default:
                this.bestSellerCategory.click()
                break;
        }
    }
}

export default new categoryPage