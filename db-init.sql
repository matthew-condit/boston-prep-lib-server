DROP DATABASE IF EXISTS boston_prep_lib;
CREATE DATABASE boston_prep_lib;

\c boston_prep_lib;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  email VARCHAR,
  role VARCHAR
);

INSERT INTO users (firstName, lastName, email, role)
  VALUES ('Matthew', 'Condit', 'matt.condit4@gmail.com', 'student');

  INSERT INTO users (firstName, lastName, email, role)
  VALUES ('Anne', 'Gaburo', 'agaburo@colgate.edu', 'admin');

