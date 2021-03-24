const book = require('./Book');

class Category {

    constructor(categoryName) {
        this.categoryName = categoryName;
    }

    getCategoryName() {
        return this.categoryName;
    }

    setCategoryName(categoryName) {
        return this.categoryName;
    }

    addCategory(categoryName){
        // TODO
    }
    
    removeCategory(categoryName){
        // TODO
    }

}


modules.export = Category;