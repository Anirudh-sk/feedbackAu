CREATE DATABASE testdb;

CREATE TABLE feedback(
    ID serial primary key UNIQUE,
    Building varchar(50) NOT NULL,
    Floor varchar(2) NOT NULL,
    Toilet VARCHAR(1) NOT NULL,
    Feedback VARCHAR(255)
);