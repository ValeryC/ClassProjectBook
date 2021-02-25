module.exports = (repositories) => {
    const user_service = {
        getAll: async () => {
            return repositories.user.getAll();
        },
        register: async (data) => {
            return repositories.user.register(data);
        },
        getUserByEmail: async (email) => {
            const rows = await repositories.user.getUserByEmail(email);
            return rows[0]
        },
        getById: async (id) => {
            const rows = await repositories.user.getById(id);
            return rows[0];
        }
    }

    return user_service;
}
