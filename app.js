const app = require('./config/server'),
    config = require('./config/env');
const cookieParser = require("cookie-parser")
const auth = require("./middlewares/auth")

app.use(cookieParser())
app.use(auth)

app.listen(config.app_port, () => {
    console.log('server started');
});