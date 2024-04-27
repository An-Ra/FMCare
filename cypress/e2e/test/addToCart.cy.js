import homePage from "../page/homePage"
import headerPage from "../page/headerPage"
import loginPage from "../page/loginPage"
import bookListPage from "../page/bookListPage"
import categoryPage from "../page/categoryPage"
import cartPage from "../page/cartPage"
import bookDetailPage from "../page/bookDetailPage"

describe("Sebagai pembeli, saya ingin bisa menambahkan dan mengurangi buku pada keranjang agar saya bisa menyesuaikan jumlah buku yang ingin saya beli dengan dana yang saya miliki.", () => {

  beforeEach(() => {
    cy.fixture('credentials').then((credentials) => {
      loginPage.loginWithCredentials(credentials.email, credentials.password)
    })
  })

  afterEach(() => {
    cartPage.cleaningCart()
  })

  it('Sebagai Pembeli Saya Dapat Menambahkan Buku Ke Keranjang dari Hasil Pencarian', () => {
    headerPage.searchBookByName('Laziness Does Not Exist')
    bookListPage.addToCartByIndex('1')
    headerPage.clickCartMenu()
    cartPage.verifyNameAndQtyCartItem('Laziness Does Not Exist', '3')
  })

  it('Sebagai Pembeli Saya Dapat Menambahkan Buku ke Keranjang dari Halaman Detail Buku', () => {
    headerPage.searchBookByName('Laziness Does Not Exist')
    bookListPage.clickTitleByIndex('1')
    bookDetailPage.addToCartDetailPage()
    headerPage.clickCartMenu()
    cartPage.verifyNameAndQtyCartItem('Laziness Does Not Exist', '3')
  })

  it('Sebagai Pembeli Saya Dapat Menambahkan Buku Ke Keranjang dari List Buku Dari Kategori', () => {
    homePage.clickArchitectureCategory()
    categoryPage.clickSubCategory('bestseller')
    bookListPage.clickTitleByIndex('1')
    bookDetailPage.addToCartDetailPage()
    headerPage.clickCartMenu()
    cartPage.verifyNameAndQtyCartItem('', '3')
  })

  it('Sebagai Pembeli Saya Dapat Mengurangi Jumlah Buku Dari Keranjang', () => {
    headerPage.searchBookByName('Laziness Does Not Exist')
    bookListPage.clickTitleByIndex('1')
    bookDetailPage.addToCartDetailPage()
    headerPage.clickCartMenu()
    cartPage.verifyNameAndQtyCartItem('Laziness Does Not Exist', '3')
    cartPage.updateQty('1')
    cartPage.verifyNameAndQtyCartItem('Laziness Does Not Exist', '1')
  })

  it('Sebagai Pembeli Saya Dapat Menghapus Seluruh Jumlah Buku Dari Keranjang', () => {
    headerPage.searchBookByName('Laziness Does Not Exist')
    bookListPage.clickTitleByIndex('1')
    bookDetailPage.addToCartDetailPage()
    headerPage.clickCartMenu()
    cartPage.verifyNameAndQtyCartItem('Laziness Does Not Exist', '3')
    cartPage.emptyCart()
    cartPage.verifyCartIsEmpty()
  })

})