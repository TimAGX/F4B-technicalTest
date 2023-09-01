This project is available on https://bank-account-management-api.onrender.com

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
   cd F4B-technicalTest
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
  
## Endpoints
 Create a Bank Account
 ` POST /accounts`
  * Request Body:
  
  {
    "accountHolderName": "John Doe",
    "dob": "1990-01-01",
    "accountType": "Savings",
    "initialBalance": 1000
}
  
* Response:
 {
        "accountNumber": "2294259911",
        "accountHolder": "tim",
        "dob": "1999-05-09",
        "accountType": "Savings",
        "balance": 100022324
    }
      
Resolve a Bank Account 
Endpoint: `GET /account/:accountNumber`
* Response
 ```
 {
    "statusCode": 200,
    "message": "Account found",
    "data":    {
        "accountNumber": "1532641593",
        "accountHolder": "Tobiloba",
        "dob": "2003-06-10",
        "accountType": "Savings",
        "balance": 1450000
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
        "accountNumber": "5776301881",
        "accountHolder": "Olugenga Timothy",
        "dob": "2000-05-09",
        "accountType": "Current",
        "balance": 15000000
    },
    {
        "accountNumber": "2787954052",
        "accountHolder": "Ayomide",
        "dob": "2003-06-10",
        "accountType": "Current",
        "balance": 1500000
    }
    ]
}

```


## Contributing
 Olugbenga Timothy 
  