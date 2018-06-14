## REST API FRAMEWORK

ReST API startup project (Node + MySql).

### Technologies used
* Node 8.x
* Express 4.16.x
* MySql 5.x

## Packages and tools used
* bcryptjs
* sequalize
* jsonwebtoken
* helmet
* lodash
* winston
* mocha
* supertest
* eslint (should be installed globally)
* apidoc (should be installed globally)
* sequelize-auto (should be installed globally)

## Development

* Clone the repo 
```sh
git clone https://github.com/exp-anoop/node-mysql.git node-mysql-api
```
* Install dependencies
```sh
cd node-mysql-api && yarn install
```
* For starting the application use the following script. (will check the code quality before starting the application).
```sh
yarn run serve
```
* To run the test cases and genarate API documentation run the following command.
```sh
yarn run build
```

## Environment variables

Create .env file in the root of your application and add the following variables in the file.

* PORT - Specify port to run the application
* MYSQL_URI - MySql connection string
* JWT_SECRET - JWT secret string
* LOG - Specify where to write logs (console or file)
* SENDGRID_API_KEY - Send grid api key (for email)
* FCM_SERVER_KEY - Firebase server key for push notification

## Module Generator
* To genarate a new module (resource) run the following command. This will ask the module details.
```sh
yarn run gen:module
```

## Model Generator
* To genarate a new model (database) run the following command.
```sh
yarn run gen:model
```


## Core modifications

### Added two new functions to response object
1. res.return() - This function is a replacement for res.send(), using this function we include additional information to the response such as message, status and data.
  * Example ```res.return({name: "Anoop"}) // Output {"message":"OK","status":200, data: {name: "Anoop"}}```

2. res.message() - To send custom message along with the response, by default it will take standard http message.
  * Example 1: ```res.status(500).message("Some thing went wrong with the server").return() // Response {"message":"Some thing went wrong with the server","status":500}```
  * Example 2: ```res.status(500).return() // Response {"message":"Internal Server Error","status":500}```