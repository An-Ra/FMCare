import homePage from "../page/homePage"
import headerPage from "../page/headerPage"
import loginPage from "../page/loginPage"
import bookListPage from "../page/bookListPage"
import categoryPage from "../page/categoryPage"
import bookDetailPage from "../page/bookDetailPage"
import wishListPage from "../page/wishListPage"

describe("Sebagai pembeli, saya ingin bisa menandai buku yang saya inginkan agar ketika saya sudah mempunyai dananya saya bisa segera membeli buku tersebut", () => {

    beforeEach(() => {
        cy.fixture('credentials').then((credentials) => {
            loginPage.loginWithCredentials(credentials.email, credentials.password)
        })
    })

    afterEach(() => {
        wishListPage.cleaningWishList()
    })

    it('Sebagai Pembeli Saya Dapat Menambahkan Buku Ke Keranjang dari Hasil Pencarian', () => {
        headerPage.searchBookByName('Laziness Does Not Exist')
        bookListPage.addToWishListByIndex('1')
        headerPage.clickMyBookList()
        wishListPage.verifyCartItem('Laziness Does Not Exist')
    })

    it('Sebagai Pembeli Saya Dapat Menandai Buku dari Halaman Detail Buku', () => {
        headerPage.searchBookByName('Laziness Does Not Exist')
        bookListPage.clickTitleByIndex('1')
        bookDetailPage.addToWishListDetailPage()
        headerPage.clickMyBookList()
        wishListPage.verifyCartItem('Laziness Does Not Exist')
    })

    it('Sebagai Pembeli Saya Dapat Menandai Buku dari Kategori Buku', () => {
        homePage.clickArchitectureCategory()
        categoryPage.clickSubCategory('bestseller')
        bookListPage.clickTitleByIndex('1')
        bookDetailPage.addToWishListDetailPage()
        headerPage.clickMyBookList()
        wishListPage.verifyCartItem('')
    })

    it('Sebagai Pembeli Saya Dapat Menghapus Wish List', () => {
        homePage.clickArchitectureCategory()
        categoryPage.clickSubCategory('bestseller')
        bookListPage.clickTitleByIndex('1')
        bookDetailPage.addToWishListDetailPage()
        headerPage.clickMyBookList()
        wishListPage.verifyCartItem('')
        wishListPage.removeWishList()
        wishListPage.verifyWishListIsEmpty()
    })
}) 