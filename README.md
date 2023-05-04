# GeoBook back-end API

To view a demo of the app, please visit: https://vimeo.com/823682896?share=copy

## Project overview

A group project to create a fully tested, RESTful API for a geocaching book app. We used:
* MongoDB
* Mongoose
* Express
* NodeJS
* Jest
* FakerJS
* Firebase Auth

This project provides information to the front-end, which can be found here: https://github.com/beckybp/fe-nc-geobook.

## Hosted back-end

The hosted back-end can be found here: https://geobook-api.onrender.com/api/users

The following endpoints have been created and tested:
* GET /api/users
* GET /api/users/:id
* POST /api/users
* PATCH /api/users/:id
* GET /api/books
* GET /api/books/:id
* POST /api/books
* DELETE /api/books/:id

## Minimum version of Node required

The minimum version of Node required to run locally is v19.3.0

## How to set up this project locally

To set up this project locally please follow the steps below:

1. Fork this repository

2. Clone the repo to your local machine: `$ git clone <repo-url>`

3. `cd` into the repo

3. Install all dev dependencies: `npm install`

4. To set up the test and development environments set up 2 env files - `.env.test` and `.env` and add the following code:
```
DATABASE_URL = <mongo-db-url>
```

5. To set up the Firebase Authentication tokens: 
 * Create an `authkey.json` file in the root directory and add your private key JSON downloaded from Firebase Authentication. 
 * Update the `authenticateToken.js` file on line 7 to replace with your databaseURL.

6. To seed the database: `npm run start`

7. To run locally: `npm run seed-prod`

7. To run tests: `npm test`