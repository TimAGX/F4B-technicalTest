// const express = require('express')
// const data = require('./dummy')

// const api = express();

// const HOST = 'localhost'
// const PORT = 8888

// api.get('/', (req,res)=>{
//     res.send('Welcome')
// })

// api.get('/people', (req,res)=>{
//     res.status(200).json(data)
// })
// api.listen(PORT, ()=>console.log(`API running at ${HOST}:${PORT}`))

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let accountCounter = 1;
const account = {};

app.post("/accounts", (req, res) => {
  const { accountHolder, dob, accountType, initialBalance } = req.body;
  if (!accountHolder || !dob || !accountType || !initialBalance) {
    return res.status(400).json({
      error:
        "Account holder name, DOB, account type and initial balanc are needed!",
    });
  }
  //request for new account information

  const accountNumber = generateAccountNumber(accountHolder, accountType, initialBalance);
  const newAccount = {
    accountNumber,
    accountHolder,
    dob,
    accountType,
    balance: initialBalance,
  };

  account[accountNumber] = newAccount;
  accountCounter++;

  res.status(201).json(newAccount);
});

function generateAccountNumber(holder, type, balance) {
  const randomNumber = Math.floor(Math.random() * 1000000000); //9 digit number
  const formattedBalance = balance.toFixed(2).replace(".", ""); //remove dcimals and format as string
  const accountnumber = `${randomNumber}${accountCounter}${holder.substring(0, 3)}${type.substring(0, 2)}${formattedBalance}`;

  return accountnumber.slice(0, 10)//ensuring it is a 10 digit number
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
