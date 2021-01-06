DROP TABLE IF EXISTS blogs;


CREATE TABLE blogs (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    messages varchar(300) NOT NULL,
    link varchar(100) 
);

INSERT INTO blogs (title, messages, link)
VALUES
   ('WELCOME!', 'Welcome to our annonymous blogging site - let off some steam!' ,'https://www.youtube.com/embed/2JyW4yAyTl0?autoplay=1'
   );



--docker exec -it server_db_1 psql -U futureproof blogsite   