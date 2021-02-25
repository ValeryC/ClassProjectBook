module.exports = (express, controllers) => {

    const router = express.Router();

    router.route('/users')
        .get(controllers.user.getAll)
        .post(controllers.user.register);
    router.route('/users/:id')
        .get(controllers.user.getById);
    router.route('/login')
        .post(controllers.user.login);
    return router;
};