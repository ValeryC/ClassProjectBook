const auth = require("../../middlewares/auth")


module.exports = (express, controllers) => {



    const router = express.Router();

    router.route('/register').get(controllers.user.login);
    router.route('/book').get((req, res) => {
        res.send("ok")
    });


    // .get(controllers.user.getAll)

    // router.route('/users/:id')
    //     .get(controllers.user.getById);



    return router;
};