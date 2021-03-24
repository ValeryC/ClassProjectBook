class Book {
    constructor(bookName, author,  isBorrowed) {
        this.bookName = bookName
        this.author = author
        this.isBorrowed = isBorrowed    
    }

    getName() {
        return this.bookName 
    }

    setName(bookName) {
        this.bookName = bookName
    }

    getAuthor() {
        return this.author 
    }

    setAuthor() {
        return this.author = author
    }

    getBorrowed() {
        this.isBorrowed
    }

    setBorrowed() {
        return this.isBorrowed = isBorrowed
    }

}

modules.export = Book;