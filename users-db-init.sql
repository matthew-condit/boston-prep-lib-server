DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  email VARCHAR
);

INSERT INTO users (firstName, lastName, email)
  VALUES ('Matthew', 'Condit', 'matt.condit4@gmail.com');
