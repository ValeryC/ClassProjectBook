const user = require('./User');

class Admin extends user {
  constructor(email, password, role) {
      super(email, password);
      this.role = role;
  }
}

let admin = new Admin('test', 'testst', 'superadmin');
let email = admin.getEmail();
console.log(email);


module.exports = Admin