

const params = {id = null, isValidated = false, itemCount = 0, rentDate = null, dueDate = null, isBackToStore = true, isExpired = false , user = null}
class Cart {   

    constructor(params) {
        this.id = id
        this.isValidated = isValidated
        this.itemCount = itemCount        
        this.rentDate = rentDate
        this.dueDate = dueDate
        this.isBackToStore = isBackToStore
        this.isExpired = isExpired
        this.books = []
        this.user = user
    }

    getId() {
        return this.id
    }

    setId(id) {
        this.id = id
    }

    getValidated() {
        return this.isValidated
    }

    setValidated(isValidated) {
         this.isValidated = isValidated
    }

    getItemCount() {
        return this.itemCount
    }

    setItemCount() {
        this.itemCount = books.length 
    }

    setCheckOutPrice(CheckOutPrice) {
        this.CheckOutPrice = CheckOutPrice
    }

    getCheckOutPrice() {
        return this.CheckOutPrice
    }

    setRentDate(rentDate){
        this.rentDate = rentDate
    }

    getRentDate() {
        return this.rentDate
    }    
    
    setdueDate() {
        const rentDate = this.rentDate
        this.dueDate = rentDate.setMonth(rentDate.getMonth() + 1)       
    }

    // https://futurestud.io/tutorials/add-month-s-to-a-date-in-javascript-or-node-js
    
    getdueDate(){
        return this.dueDate
    }

    setBacktoStore(isBackToStore){
        this.isBackToStore = isBackToStore
    }   
    
    getBacktoStore(){
        return this.isBackToStore
    }

    setExpired(isExpired){
        this.isExpired = isExpired
    }

    getExpired(){
        return this.isExpired
    }  

    getBooks() {
        return this.getBooks
    }

    setBooks(books) {
        this.books = books
    }

    getUser() {
        return this.user
    }

    setUser(user) {
        this.user = user
    }
    
    addBook(bookToAd) {
        this.books.push(bookToAd)
    }

    clearCart() {
        this.books = []
    }

    removeBook(bookToRemove) {
        const index = this.books.indexOf(bookToRemove)
        if (index != -1) {
            return this.books.splice(index, 1)
        }
    }

    displayCart() {

    }




}

modules.export = Cart