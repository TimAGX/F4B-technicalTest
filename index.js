const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let accountCounter = 1;
let accounts = [];

app.get('/', (req,res)=>{
    res.send('Bank Account Management API')
})

app.post("/accounts", (req, res) => {
  const { accountHolder, dob, accountType, initialBalance } = req.body;

  if (
    !accountHolder ||
    !dob ||
    !accountType ||
    isNaN(parseInt(initialBalance))
  ) {
    return res.status(400).json({
      error:
        "Account holder name, DOB, account type and initial balance are needed!",
    });
  }
  //request for new account information

  const accountNumber = generateAccountNumber(
    accountHolder,
    accountType,
    initialBalance
  );
  const newAccount = {
    accountNumber,
    accountHolder,
    dob,
    accountType,
    balance: initialBalance,
  };

  //   accounts[accountNumber] = newAccount;
  accounts = [...accounts, newAccount];
  accountCounter++;

  res.status(201).json(newAccount);
});

function generateAccountNumber(holder, type, balance) {
  const randomNumber = Math.floor(Math.random() * 1000000000); //9 digit number
  const formattedBalance = balance.toFixed(2).replace(".", ""); //remove decimals and format as string
  const accountNumber = `${randomNumber}${accountCounter}${holder.substring(
    0,
    3
  )}${type.substring(0, 2)}${formattedBalance}`;

  return accountNumber.slice(0, 10); //ensuring it is a 10 digit number
}

//Resolve a Bank account

app.get("/accounts/:accountNumber", (req, res) => {
  const { accountNumber } = req.params;
  // const account = accounts[accountNumber];
  const account = accounts.filter((acc) => acc.accountNumber === accountNumber);

  if (!account) {
    return res.status(404).json({ error: "Account not found." });
  }

  res.json(account);
});

// fetch all bank accounts

app.get("/accounts", (req, res) => {
  const accountList = Object.values(accounts);
  res.json(accountList);
});

//Server

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
