const repositories = require("../repositories");

module.exports = (repositories) => {
    const book_service = {
        getAll: async (data) => {
            return repositories.book.getAll();
        },

        getWishlist: async (id) => {
            const rows = await repositories.book.getWishlist(id);
            return rows;
        },


        checkBookQuantity: async (id) => {
            const rows = await repositories.book.checkBookQuantity(id);
            const quantity = rows.map(item => item.quantity)
            return quantity[0]

        },
        subtractedBookQuantity: async (id) => {
            const rows = await repositories.book.subtractedBookQuantity(id);
            return rows;

        },

        createBorrowed: async (Users_id, Books_id) => {
            const rows = await repositories.book.createBorrowed(Users_id, Books_id);
            return rows;

        },

    }

    return book_service;
}
