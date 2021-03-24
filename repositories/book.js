module.exports = (models) => {
    const book_repository = {

        getAll: async (data, halfQuery) => {
            return models.book.query("select * from books" + halfQuery);
        },

        getWishlist: async (id) => {
            return models.book.query("SELECT * FROM `Wishlist` WHERE Users_id = ? ", [id]);
        },
        // subtractedBookQuantity: async (id, quantity) => {
        //     return models.book.query(" UPDATE Books SET quantity = quantity - 1 WHERE id = ?  ", [id, quantity]);
        // },
        checkBookQuantity: async (author, bookName) => {
            return models.book.query(" SELECT * FROM `Books` WHERE author = ? AND book_name =  ? ", [author, bookName]);
        },
        // createBorrowed: async (Users_id, Books_id) => {
        //     return models.book.query(" INSERT INTO `Borrowed` ( `Users_id`, `Books_id`) VALUES(?,?) ", [Users_id, Books_id]);
        // }

    }

    return book_repository;
}
