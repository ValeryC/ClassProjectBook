module.exports = (models) => {
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
        getById: async (id) => {
            return models.user.query("select * from Users where id = ? LIMIT 1", [id]);
        }
    }
    
    return user_repository;
}
