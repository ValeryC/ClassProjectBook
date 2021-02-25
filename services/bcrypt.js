module.exports = (bcrypt) => {
  const bcrypt_service = {
    hashPassword: async (password) => {
      const hashedPassword = await bcrypt.hash(password, 10)
      return hashedPassword
    }
  }
  return bcrypt_service;
}
