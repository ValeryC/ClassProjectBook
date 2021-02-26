module.exports = (services) => {
    const book_controller = {
        getAll: async (req, res) => {
            let result = await services.book.getAll();
            res.send(result);
        },
        getWishlist: async (req, res) => {
            const { id } = req.params;
            let result = await services.book.getWishlist(id);
            res.send(result);
        },

        subtractedBookQuantity: async (req, res) => {
            const { id } = req.params;
            const Users_id = req.body.user;
            const Books_id = req.params.id;


            const checkBookQuatity = await services.book.checkBookQuantity(id);

            const reservation = async () => {
                const sousTred = await services.book.subtractedBookQuantity(id)
                const createReservation = await services.book.createBorrowed(Users_id, Books_id);
                res.status(201).send(createReservation)
            }

            if (checkBookQuatity > 0) {
                reservation()
            } else {
                res.status(201).send("Ce livre n'est malheureusement pas en stock mais vous pouvez l'ajouter dans votre liste des souhaits")
            }


        }
    };

    return book_controller;
};




// ,
        // checkBookQuantity: async (req, res) => {
        //     const { id } = req.params;
        //     let result = await services.book.checkBookQuantity(id);
        //     res.status(200).json(result);
        // },

        // createBorrowed: async (req, res) => {
        //     //Recupérer le id client dans le req.userId grace au token
        //     const Users_id = req.body.user;
        //     const Books_id = req.params.id

        //     let result = await services.book.createBorrowed(Users_id, Books_id);
        //     res.send(result);
        // }