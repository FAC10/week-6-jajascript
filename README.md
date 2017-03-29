[![Travis-Badge-Build](https://api.travis-ci.org/FAC10/week-6-jajascript.svg?branch=master)](https://travis-ci.org/FAC10/week-6-jajascript)
[![Code Coverage](https://codecov.io/gh/FAC10/week-6-jajascript/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC10/week-6-jajascript)

Founders and Coders, Interesting Companies App

# week-6-jajascript

### User Story

As a member of Founders & Coders who wants to learning from interestering companies, I would like to share my suggestions with the organisation, so that we can crowdsource our connections to make it a reality.

Thus, I should be able to:
* add an addition to the table, including company name and why they are interesting
* see a table of results so that I don't add duplicate suggestions and can see what other people are interested in

### Requirements

- [ ] Simple web app with a node server and a database
- [ ] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
- [ ] Database hosted on elephant.sql, or Heroku, or locally
- [ ] Build script for your database
- [ ] Security concerns appropriately considered (you must protect against script injections!)
- [ ] Good test coverage both server- and client-side
- [ ] Content dynamic, but DOM manipulation kept to a minimum
- [ ] Mobile-first design
- [ ] Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme)

### Strech goals:
- [ ] upvote feature
- [ ] accountability (assignment) feature
- [ ] prevent duplicate entries

## Schema diagrams

Here are the schema diagrams for the database:

### Companies: 1 to 1
Column | Type | Modifiers
--- | --- | ---
id | integer | not null default
company_name | character varying(100) | not null
location | character varying(50) | not null
reason | character varying(250) | not null
author_id | interger | not null

### Authors: 1 to Many

Column | Type | Modifiers
--- | --- | ---
id | integer | not null default
first_name | character varying(100) | not null
surname | character varying(100) | not null

### Up_Votes: Many to Many

Column | Type | Modifiers
--- | --- | ---
company_id | integer | not null
author_id | integer | not null
