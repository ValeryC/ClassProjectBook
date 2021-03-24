const cart = require('../models/Cart')
const user = require('../models/User')

// User valid his cart    
function validateCart(cartToValidated, booksCart) {
  
    // cart is validate
    cartToValidated.setValidated(true)
    // Set begin of rent date 
    cartToValidated.setRentDate(new Date())

    // Date of return book no parameters cause the logic is implemented from
    //rentDate plus one month 
    // set date to one month for the user to borrow a book
    cartToValidated.setDueDate()
    
    //we set itemCount from the books.length 
    cartToValidated.setItemCount()
    
    
    const userId = cartToValidated.getUser().getId()
    
    const userRentend = cartToValidated.getUser().getNumberRentend()
    //TODO update numberRentend + books.length in user table
     
    cartToValidated.setBooks(booksCart)
    cartToValidated.setBacktoStore(false)

    for (book in books) {
        
        //TODO check if the book is available in database by name and author

        //TODO update isBorrowed to true query by Id in bookRepo

    }

    const cartToValidatedId = cartToValidated.getId()
    //TODO update notre carToValidated

    const emptyCart = new Cart()
    emptyCart.setUser(cartToValidated.getUser)
    //TODO save notre emptycart
}
  

