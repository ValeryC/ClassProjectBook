const book = require('./Book')

class WhisList {

  constructor(itemCount) {
    this.itemCount = itemCount;
    this.books = []
  }

  getItemCount() {
    return this.itemCount;
  }

  setItemCount(itemCount) {

  }

  addBook(bookToAd) {
    this.books.push(bookToAd)
  }

  clearWhishlist() {
    this.books  = []
  }

  removeBook(bookToRemove) {
    const index = this.books.indexOf(bookToRemove);
    return this.books.splice(index, 1);
  }

}


module.exports = WhisList
