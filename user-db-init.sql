DROP DATABASE IF EXISTS boston_prep_lib;
CREATE DATABASE boston_prep_lib;

\c boston_prep_lib;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  email VARCHAR,
  password VARCHAR,
  role VARCHAR,
  readBooks VARCHAR[]
);

INSERT INTO users (firstName, lastName, email, password, role)
  VALUES ('Matthew', 'Condit', 'matt.condit4@gmail.com', 'password', 'member');

INSERT INTO users (firstName, lastName, email, password, role)
  VALUES ('Anne', 'Gaburo', 'agaburo@colgate.edu', 'admin', 'admin');

CREATE TABLE books (
  ID VARCHAR PRIMARY KEY,
  title VARCHAR,
  author VARCHAR,
  description VARCHAR,
  lexile VARCHAR,
  genre VARCHAR,
  pages VARCHAR,
  coverImageUrl VARCHAR,
  tags VARCHAR[]
)

CREATE TABLE classes (
    ID VARCHAR PRIMARY KEY,
    className VARCHAR,
    roomNumber VARCHAR,
    teachers VARCHAR[],
    students VARCHAR[]
)


--
--  INSERT INTO books (
--  ID,
--  title,
--  author,
--  description,
--  lexile,
--  genre,
--  pages,
--  coverImageUrl,
--  tags )
--  VALUES (
--         "id": "9781933491127",
--        "title": "12 brown boys"
--
--        "author": "Tyree, Omar",
--        "coverImageUrl": "http://www.mackin.com/BookPics/Book.aspx?isbn=9781933491127",
--        "description": "A collection of short stories featuring African American preteen boys as central characters. These diverse characters are funny, serious, edgy, and studious.",
--        "genre": "Fiction",
--        "id": "9781933491127",
--        "lexile": "760",
--        "pages": "187",
--        "tags": [
--            "African Americans",
--            "Boys",
--            "Short stories."
--        ],
--        "title": "12 brown boys"
--  )