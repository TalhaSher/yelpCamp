# CampScape

## BASIC SETUP

YelpCamp is an interactive website that empowers users to create and provide reviews for various campgrounds. To engage in reviewing or creating campgrounds, users are required to have an authenticated account. This project was developed as a part of Colt Steele's comprehensive [web development course](https://www.udemy.com/course/the-web-developer-bootcamp/) on Udemy.
The implementation of this project leverages a robust technology stack, including [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), and [Bootstrap](https://getbootstrap.com/). The authentication aspect is seamlessly handled by [Passport.js](passportjs.org), a powerful middleware for user authentication in Node.js applications.

## Features

- Register and Login.
- Delete their own campground.
- Edit their own campground.
- Users can create and provide reviews for various campgrounds.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Excaliburx8080x/CampScape.git
```

Go to the project directory

```bash
  cd CampScape
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.
First create a [cloudinary](https://cloudinary.com/) account.

`ClOUDINARY_CLOUD_NAME=<url>`

`CLOUDINARY_KEY=<key>`

`CLOUDINARY_SECRET=<secret>`

`DB_URL=<mongodb atlas> or <local mongo db link>`

`SECRET=<secret>`

`MAPBOX_TOKEN=<token>`
