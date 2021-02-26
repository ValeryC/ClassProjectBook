
// Création des Tables 

CREATE TABLE users
    (
        id INT(11)  AUTO_INCREMENT PRIMARY KEY,
        firstName varchar(255) NOT NULL,
        lasttName varchar(255) NOT NULL,
        email varchar(255)NOT NULL,
        password varchar(255) NOT NULL
    )
// testé et approuvé

CREATE TABLE books
    (id INT(11)AUTO_INCREMENT PRIMARY KEY,
        title varchar(255) NOT NULL,
        genre_id varchar(255) NOT NULL,
        author varchar(255)NOT NULL,
        quantity int NOT NULL DEFAULT 0

    )



// testé et approuvé
CREATE TABLE catagory
    (id INT(11)AUTO_INCREMENT PRIMARY KEY,
        name varchar(255) NOT NULL,
    )

CREATE TABLE genres
    (id INT(11)AUTO_INCREMENT PRIMARY KEY,
        name varchar(255) NOT NULL

    )






CREATE TABLE borrowed
    (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        user_id int NOT NULL,
        book_id int NOT NULL
    )
// testé et approuvé


CREATE TABLE wishlist
    (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        user_id int NOT NULL,
        book_id int NOT NULL

    )
// testé et approuvé


//Insert de la data dans les tables 

INSERT INTO books(title, genre_id, author, quantity)
VALUES("javaScript", "3", "leonardo", 4)
// testé et approuvé


1// Inscription  utilisateur
// je vérifie si le compte exite déjà
SELECT * FROM users WHERE email = "set?"
On peut aussi utiliser un IF NOT EXISTS


si le resul = 0 je créer son compte
INSERT INTO users IF NOT EXISTS(firstName, lasttName, email, password) VALUES("leonardo", "maundo", "leonardo.ka@gmail.com", "dhdhbf")



1.2// connexion utilisateur
je vérifie si mon user existe déjà dans la db
SELECT * FROM users WHERE email = "set?"

si le resul = 1 je compare son password avec bcrypt



2// Lister les livres 
SELECT * FROM books


3// Lister les livres avec filtres : nom|genre|catégorie|auteur 
SELECT * FROM books WHERE  nom and genre and category and author WHERE nom = "set?" and nom = "ser?" and genre = "set?" and category = "set?" and author = "set?"


4// Lister les catégories/genres




5// Location dun livre   ok
// Quad le client click sur loeur : on ajoute das la table  "borrowed " le nom du client et son id "on peut la recupérer dans le req.UserId grace au token "




6// WishList de livres
// Je vérifie si le livre nest pas déjà dans la liste des souhaits
SELECT * FROM wishlist WHERE book_id = "set?"

// Si le result = 0 j'ajoute le livre dans la liste des souhaits
INSERT INTO wishlist(Users_id, Books_id) VALUES(1, 2)



INSERT INTO books(title, author, quantity, Genres_id)
VALUES("Harry Potter 1", ["Fantasy", "Adventure"])