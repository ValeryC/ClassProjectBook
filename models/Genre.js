const book = require('./Book');

class Genre {

    constructor(genreName) {        
        this.genreName = genreName;
    }

    getName() {
        return this.genreName;
    }

    setName(genreName) {
        this.genreName = genreName;
    }

    addGenre(genreName) {
        // TODO
    }
    
    removeGenre(genreName){
        // TODO
    }
}

modules.export = Genre;