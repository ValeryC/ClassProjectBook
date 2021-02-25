module.exports = (models, bcrypt) => {
    const user_repository = {
        getAll: async () => {
            return models.user.query("select * from Users");
        },
        register: async (data) => {
            return models.user.query("INSERT INTO Users(firstname, lastname, email, password) VALUES (?, ?, ?, ?)", data)
        },
        getUserByEmail: async (email) => {
            return models.user.query("SELECT * FROM Users WHERE email = ? LIMIT 1", [email]);
        },
        // checkPassword: async (data) => {
        //     console.log('passwd', data)
        //     return bcrypt.compare(password, userPassword);
        // },
        getById: async (id) => {
            console.log('idddi', id)
            return models.user.query("select * from Users where id = ? LIMIT 1", [id]);
        }
    }
    
    return user_repository;
}
