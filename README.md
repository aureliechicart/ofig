# Ofig :sparkles:

## Introduction

This project has been developed for learning purposes.<br>
It is a Final Fantasy action figures shopping website. You can display the figures by category, display the details and reviews of a figure, and mark/remove figures as favorites. No possibility to buy them yet! :grin:

## Learning goals

- Modeling the database : establishing an MCD and a DB creation script
- Creating a dataMapper
- Initial static integration with hard-coded data in html files, then __making the views dynamic__ by feeding data from DB into the EJS templates
- Factoring views using ejs partial views (header and footer)
- Using EJS locals object which is available in all views
- __Responsive design__: Bootstrap breakpoints used to change the layout depending on viewport size
- Using modals to display action figure reviews
- Setting up __sessions__ to save figures marked as favorites by current user

## Technologies

- Node v16.14.0
- Express v4.17.3
- postgreSQL 12 database server
- pg (PostgreSQL client) v8.7.3
- ejs v3.1.6
- dotenv v16.0.0
- express-session v1.17.2
- Bootstrap 4.3.1

## Install

Clone this repository.

In the terminal, at the root of the folder project, run the following command to install the dependencies :

```bash
npm i
```

Create a local [PostgreSQL database](https://www.postgresql.org/docs/12/app-createdb.html):

```bash
createdb <database_name>
```

Run the following command to create the tables and import the data:

```bash
psql -d <database_name> -f /database/create_db.sql
```

## Usage

Run the following command to start the server:

```bash
npm run dev
```

You will then be able to access it at localhost:5050.
