// ATM and Transactions
let balance = 1000;
let transactionHistory = [];

function atmTransaction(transactionType, amount = 0) {
  if (transactionType === "Withdrawal") {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      transactionHistory.push(`Withdrawal: $${amount}`);
    } else {
      console.log("Invalid withdrawal.");
    }

  } else if (transactionType === "Deposit") {
    if (amount > 0) {
      balance += amount;
      transactionHistory.push(`Deposit: $${amount}`);
    } else {
      console.log("Invalid deposit.");
    }

  } else if (transactionType === "Undo") {
    let last = transactionHistory.pop();

    if (last) {
      if (last.startsWith("Withdrawal")) {
        balance += parseInt(last.split("$")[1]);

      } else if (last.startsWith("Deposit")) {
        balance -= parseInt(last.split("$")[1]);
      }

      console.log("Last transaction undone.");

    } else {
      console.log("No transaction to undo.");
    }

  } else if (transactionType === "Fee") {
    balance -= 10;
    transactionHistory.unshift("Maintenance Fee: $10");

  } else {
    console.log("Invalid transaction type.");
  }

  // Keep only last 10 transactions
  if (transactionHistory.length > 10) {
    transactionHistory.shift();
  }

  console.log("ATM and Transactions:");
  console.log("Balance:", balance);
  console.log("History:", transactionHistory);
  console.log("-----------------------------");
}

// Test ATM
atmTransaction("Deposit", 200);
atmTransaction("Withdrawal", 50);
atmTransaction("Undo");
atmTransaction("Fee");

