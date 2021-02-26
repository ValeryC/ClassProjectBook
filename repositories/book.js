module.exports = (models) => {
    const book_repository = {
        getAll: async (data) => {
            return models.book.query("select * from books");
        },

        getWishlist: async (id) => {
            return models.book.query("SELECT * FROM `Wishlist` WHERE Users_id = ? ", [id]);
        },
        subtractedBookQuantity: async (id) => {
            return models.book.query(" UPDATE Books SET quantity = quantity - 1 WHERE id = ?  ", [id]);
        },
        checkBookQuantity: async (id) => {
            return models.book.query(" SELECT `quantity` FROM `Books` WHERE id =?  ", [id]);
        },
        createBorrowed: async (Users_id, Books_id) => {
            return models.book.query(" INSERT INTO `Borrowed` ( `Users_id`, `Books_id`) VALUES(?,?) ", [Users_id, Books_id]);
        }

    }

    return book_repository;
}
