module.exports = (express, controllers) => {

    const router = express.Router();

    router.route('/books').get(controllers.book.getAll)
    router.route('/wishlist/:id').get(controllers.book.getWishlist)
    router.route('/borrowed/:id').post(controllers.book.subtractedBookQuantity)

    return router;
};