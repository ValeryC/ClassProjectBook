const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
    const token = req.cookies.jwt

    if (!token) {

        return res.status(401).json({
            auth: false,
            message: "No token provided"
        })
    }

    // const parts = token.split(" ");

    // if (!parts.length === 2)
    //     return res.status(401).send({ error: "token error" });


    jwt.verify(token, "rhrhhrhr", (err, decoded) => {
        if (err) return res.status(401).send({ error: "token invalide" });
        req.userId = decoded.id;
        return next()
    });
};
