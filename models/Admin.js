const user = require('./User');

class Admin extends user {
  constructor(email, password, role) {
      super(email, password);
      this.role = role;
  }
}

let admin = new Admin('test@mail.com', 'testst@mail.com', 'superadmin@mail.com');
// create temporary email for test  in real
// https://temp-mail.org/en/
let email = admin.getEmail();
console.log(email);


module.exports = Admin