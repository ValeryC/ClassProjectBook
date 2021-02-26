
CREATE TABLE users
(
    id INT(11)
    AUTO_INCREMENT PRIMARY KEY,
        firstName varchar
    (255) NOT NULL,
        lasttName varchar
    (255) NOT NULL,
        email varchar
    (255)NOT NULL,
        password varchar
    (255) NOT NULL
    )




    CREATE TABLE borrowed
    (
        id INT(11)
        AUTO_INCREMENT PRIMARY KEY,
          user_id int NOT NULL,
          FOREIGN KEY
        (user_id)   REFERENCES users
        (id) , 
        book_id int NOT NULL
    )




        CREATE TABLE book_catagory
        (
            id INT(11)
            AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY
            (category_id)   REFERENCES books
            (id)    
        
    )
