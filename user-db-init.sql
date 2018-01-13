DROP DATABASE IF EXISTS boston_prep_lib;
CREATE DATABASE boston_prep_lib;

\c boston_prep_lib;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  email VARCHAR,
  classroomId INT,
  password VARCHAR,
  role VARCHAR,
  readBooks VARCHAR[]
);

INSERT INTO users (firstName, lastName, email, classroomId, password, role, readBooks)
  VALUES ('Matthew', 'Condit', 'matt.condit4@gmail.com', 1, 'password', 'member', ARRAY[]::VARCHAR[]);

INSERT INTO users (firstName, lastName, email, password, role, readBooks)
  VALUES ('Anne', 'Gaburo', 'agaburo@colgate.edu', 'admin', 'admin', ARRAY[]::VARCHAR[]);

CREATE TABLE books (
  ID VARCHAR PRIMARY KEY,
  title VARCHAR,
  author VARCHAR,
  description VARCHAR,
  lexile VARCHAR,
  classroomId INT,
  genre VARCHAR,
  pages VARCHAR,
  coverImageUrl VARCHAR,
  tags VARCHAR[]
);

CREATE TABLE classes (
  ID SERIAL PRIMARY KEY,
      className VARCHAR,
      grade INT,
      roomNumber VARCHAR,
      teachers INT[],
      students INT[]
);


INSERT INTO classes (className, roomNumber, grade, teachers, students)
  VALUES ('Washington University', '200', 6, ARRAY[2], ARRAY[1]);

INSERT INTO classes (className,  roomNumber, grade, teachers, students)
  VALUES ('Boston College', '201', 6, ARRAY[2], ARRAY[1]);

INSERT INTO classes (className,  roomNumber, grade, teachers, students)
  VALUES ('Tufts University', '302', 7, ARRAY[2], ARRAY[1]);

INSERT INTO classes (className,  roomNumber, grade, teachers, students)
  VALUES ('Harvard University', '402', 8, ARRAY[2], ARRAY[1]);



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