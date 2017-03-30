BEGIN;

DROP TABLE IF EXISTS companies, authors, up_votes CASCADE;

CREATE TABLE companies (
  id            serial        PRIMARY KEY,
  company_name  varchar(100)  NOT NULL,
  location      varchar(50)   NOT NULL,
  reason        varchar(250)  NOT NULL,
  author_id     integer REFERENCES authors(id) ON UPDATE CASCADE
);

CREATE TABLE authors (
  id            serial        PRIMARY KEY,
  first_name    varchar(100)  NOT NULL,
  surname       varchar(100)  NOT NULL
);

CREATE TABLE up_votes (
  company_id    integer REFERENCES companies(id) ON UPDATE CASCADE,
  author_id     integer REFERENCES authors(id) ON UPDATE CASCADE
);

-- 1 TO 1
INSERT INTO companies(company_name, location, reason, author_id) VALUES
('Google', 'London', 'Infinite free food and masssages', 1),
('Memrise', 'London', 'CEO is well cool and a chess champion', 2),
('Thoughtworks', 'London', 'Jus Cos', 3),
('Salmon Inc', 'London', 'Fishy reasons', 4)
RETURNING ID;

-- 1 TO MANY
INSERT INTO authors(first_name, surname) VALUES
('Antonio', 'Trabalza'),
('Alexis', 'Lui'),
('Joey', 'Louise'),
('Jessica', 'Salmon')
RETURNING ID;

-- MANY TO MANY
INSERT INTO up_votes(company_id, author_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(1, 2)
RETURNING ID;

COMMIT;
