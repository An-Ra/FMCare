import homePage from "../page/homePage"
import headerPage from "../page/headerPage"
import loginPage from "../page/loginPage"
import bookListPage from "../page/bookListPage"
import categoryPage from "../page/categoryPage"

describe("Sebagai pembeli, ketika saya mencari buku, saya ingin mengurutkannya berdasarkan dari harga terendah ke tertinggi agar saya bisa mendapatkan harga terbaik.", () => {

  beforeEach(() => {
    cy.fixture('credentials').then((credentials) => {
      loginPage.loginWithCredentials(credentials.email, credentials.password)
    })
  })

  it('Sebagai Pembeli Saya Dapat Mengurutkan Harga Buku Dari Terendah Ke Tertinggi dari Menu Pencarian', () => {
    headerPage.searchBookByName('Laziness Does Not Exist')
    bookListPage.verifySortBookAsc()
  })

  it('Sebagai Pembeli Saya Dapat Mengurutkan Harga Buku Dari Terendah Ke Tertinggi dari Rekomendasi Buku', () => {
    homePage.clickRomanticComedyCollection()
    bookListPage.verifySortBookAsc()
  })

  it('Sebagai Pembeli Saya Dapat Mengurutkan Harga Buku Dari Terendah ke Tertinggi dari Katergori Buku', () => {
    homePage.clickArchitectureCategory()
    categoryPage.clickSubCategory('bestseller')
    bookListPage.verifySortBookAsc()
  })
})