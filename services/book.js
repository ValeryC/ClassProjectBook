const repositories = require("../repositories");

module.exports = (repositories) => {
    const book_service = {
        getAllWithFilter: async (data, author, bookName, isBorrowed) => {            
                queryBuilder = [];

                if (author != null) {
                    queryBuilder.push(" author = " + author)
                }

                if (bookName != null) {
                    queryBuilder.push(" book_name = " + bookName)
                }

                if (isBorrowed != null) {
                    queryBuilder.push(" is_borrowed = " + isBorrowed)
                }

                halfQuery = queryBuilder.join(" AND");

                if (halfQuery != "") {
                    halfQuery = " WHERE" + halfQuery
                }

                return repositories.book.getAll(data, halfQuery);            
        },

        getWishlist: async (id) => {
            const rows = await repositories.book.getWishlist(id);
            return rows;
        },


        checkBookQuantity: async (author, bookName) => {
            const rows = await repositories.book.checkBookQuantity(author, bookname);
            return rows;

        }

    }

    return book_service;
}

// git branch
// git diff filename 
// git status 
// git add filename
// git commit -m'[feature]message'
// git push
// :)