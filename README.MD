Bank Account Management API

**Objective:**

The objective of this technical test is to assess your skills in designing and implementing a simple RESTful API using Node.js and Express. You are required to create a basic Bank Account Management API with three endpoints: one to create a bank account, one to resolve a bank account, and one to fetch all bank accounts.

  
## Features
- Create a new bank account with account holder details.
- fetch a bank account by providing its account number.
- Fetch a list of all bank accounts stored.
  
## Getting Started
    Prerequisites
 * Node.js (Install from https://nodejs.org/)
 * npm (Comes bundled with Node.js)
  
  Installation
  1. Clone the repo to your local machine using git  
```
git clone https://github.com/TimAGX/F4B-technicalTest
```
2. Navigate into project directory and install dependencies
 ```
   cd F4B-technical-test
```
3. Install node modules
  ```
npm i or npm install
   ```
## Usage
```
npm run start to start server using node
npm start:dev to start server using nodemon
```
* The server will start on port 8080.

* Use a tool like Postman or curl to make API requests to the available endpoints.
*  Link to live site  https://rose-vivacious-caiman.cyclic.app
  
## Endpoints
 Create a Bank Account
 ` POST /create-account`
  * Request Body:
  ```
  {
    "accountHolderName": "John Doe",
    "dob": "1990-01-01",
    "accountType": "Savings",
    "initialBalance": 1000
}
  ```
* Response:
   ``` 
   {
    "statusCode": 201,
    "message": "Account created successfully",
    "data": {
        "accountNumber": "6340777668",
        "accountHolderName": "Victor Chuka",
        "dob": "1998-02-05T00:00:00.000Z",
        "accountType": "Current",
        "balance": 10000
    }
  }
      
   ```
Resolve a Bank Account 
Endpoint: `GET /account/:accountNumber`
* Response
 ```
 {
    "statusCode": 200,
    "message": "Account found",
    "data": {
        "accountNumber": "6851825673",
        "accountHolderName": "Barny Victor",
        "dob": "1998-02-05T00:00:00.000Z",
        "accountType": "Savings",
        "balance": 100
    }
}
 
 ```

Fetch All Bank Accounts
Endpoint: `GET /accounts`
* Response
```

{
    "statusCode": 200,
    "message": "Accounts found",
    "data": [
        {
            "accountNumber": "6790874819",
            "accountHolderName": "John Doe",
            "dob": "1990-01-01T00:00:00.000Z",
            "accountType": "Savings",
            "balance": 1000
        },
        {
            "accountNumber": "6851825673",
            "accountHolderName": "Barny Victor",
            "dob": "1998-02-05T00:00:00.000Z",
            "accountType": "Savings",
            "balance": 100
        }
    ]
}

```


## Contributing
 * Barny Victor 
  
## License
 This project is licensed under the MIT License.