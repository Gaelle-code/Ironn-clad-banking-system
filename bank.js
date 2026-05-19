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
// Loan App
function processLoans(scores) {
  let eligible = scores.filter(score => score > 700);

  let adjustedScores = scores.map(score => score + 20);

  let totalRisk = scores.reduce((sum, score) => sum + score, 0);

  let hasPerfect = scores.some(score => score === 900);

  let allAbove400 = scores.every(score => score >= 400);

  let firstRisk = scores.find(score => score < 500);

  let riskIndex = scores.findIndex(score => score < 500);

  console.log("Loan App:");

  console.log("Eligible:", eligible);
  console.log("Adjusted:", adjustedScores);
  console.log("Total Risk:", totalRisk);
  console.log("Has Perfect:", hasPerfect);
  console.log("All ≥ 400:", allAbove400);
  console.log("First Risk:", firstRisk);
  console.log("Risk Index:", riskIndex);

  console.log("-----------------------------");
}

processLoans([650, 800, 500, 720, 410, 900]);


// Fraud Detection
let dailyTransactions = [1042, 8922, 3301, 5510, 7719, 9920];
let fraudID = 5510;

console.log("Fraud Detection:");

if (dailyTransactions.includes(fraudID)) {
  let index = dailyTransactions.indexOf(fraudID);

  console.log("Fraud found at index:", index);

  let lastThree = dailyTransactions.slice(-3);

  console.log("Last 3 transactions:", lastThree);

  dailyTransactions.splice(index, 1);
}

dailyTransactions.forEach(id => {
  console.log(`Transaction ${id} cleared.`);
});

console.log("-----------------------------");
// Bank Merge
let branchA = ["Alice", "Bob"];
let branchB = ["Charlie", "Diana"];

let allCustomers = branchA.concat(branchB);

let messyData = [["Eve", "Frank"], ["Grace"], ["Hank", "Ivy"]];

let flatData = messyData.flat();

let sorted = flatData.sort().reverse();

let banner = allCustomers.join(" - ");

let tellerWindows = new Array(5).fill("Closed");

console.log("Bank Merge:");

console.log("All Customers:", allCustomers);
console.log("Flat Data:", flatData);
console.log("Sorted Z-A:", sorted);
console.log("Banner:", banner);
console.log("Tellers:", tellerWindows);

console.log("-----------------------------");



