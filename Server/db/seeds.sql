DROP TABLE IF EXISTS blogs;


CREATE TABLE blogs (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    message varchar(300) NOT NULL,
    link varchar(100) 
);

INSERT INTO blogs (title, message, link)
VALUES
   ('WELCOME!', 'Welcome to our annonymous blogging site - let off some steam!' ,'www.youtube.com/watch?v=mHONNcZbwDY'
   );



--docker exec -it server_db_1 psql -U futureproof blogsite   