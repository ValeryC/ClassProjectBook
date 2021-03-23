class User {

  constructor(emailValue, passwordValue = null) {
      this.email = emailValue;
      this.password = passwordValue
      this.articles = [];
      console.log('coucou')
  }
  getEmail() {
      return this.email;
  }

  viewArticles(filters) {
      data = [{id: 1, title: 'tt', user: {email: 'ee', password: 'tt'}}, {id:2, title: 'ee'}];
      data.forEach(articleData => {

          let article = new Article(articleData.title);
          let user = new User(articleData.user.email, articleData.user.password);

          article.setUser(user);
          
          this.articles.push(article);
      });
  }


}


module.exports = User;

