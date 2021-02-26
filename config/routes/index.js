module.exports = (express, controllers) => {
    const user_route = require('./user');
    const book_route = require('./book');

    const routes = [
        user_route(express, controllers),
        book_route(express, controllers)
    ]

    return routes
}