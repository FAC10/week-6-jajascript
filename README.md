[![Travis-Badge-Build](https://api.travis-ci.org/FAC10/week-6-jajascript.svg?branch=master)](https://travis-ci.org/FAC10/week-6-jajascript)
[![Code Coverage](https://codecov.io/gh/FAC10/week-6-jajascript/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC10/week-6-jajascript)

# Founders and Coders, Interesting Companies App

Live site: [https://second-degree.herokuapp.com/](https://second-degree.herokuapp.com/)

Scroll to the bottom of the README for installation instructions, if you would like to run our project locally!

### User Story

As a member of Founders & Coders who wants to learning from interesting companies, I would like to share my suggestions with the organisation, so that we can crowdsource our connections to make it a reality.

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


## Installation instructions

 - Clone this repo and cd into it

  - `git clone git@github.com:FAC10/week-6-jajascript.git`

 - Run `npm install` to install all dependencies

#### Database

 - Create a `config.env` file in the root of the project

 - Add the `DB_URL` variable, as noted in the FAC10 Gitter channel (posted by Joey Scott, 31st March 2017 at 10:06) __OR__ ask JAJAscript team members :+1:

#### Run locally

 - Run `npm run devStart` to start the server using Nodemon (which will automatically restart Node when changes are detected in your files)

 - Navigate to http://localhost:4000/ in your browser

#### Tests

 - Run `npm run test` to run the tests *(this will take around 30 secs to complete)*

 - Run `npm run coverage` to check coverage *(this will take around 30 secs to complete)*
