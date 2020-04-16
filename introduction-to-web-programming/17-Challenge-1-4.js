console.clear();
const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  if (transaction.type === "credit") {
    user.balance = user.balance + transaction.value;
  } else if (transaction.type === "debit") {
    user.balance = user.balance - transaction.value;
  } else {
    console.log("This transaction can only be Credit or Debit");
    return false;
  }
  user.transactions.push(transaction);
}

function getHigherTransactionByType(type) {
  let higherTransaction;
  let higherValue = 0;
  for (let transaction of user.transactions) {
    if (transaction.type === type && transaction.value > higherValue) {
      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  }
  return higherTransaction;
}

function getAverageTransactionValue() {
  let sum = 0;
  for (let transaction of user.transactions) {
    // transaction.type === "credit" ? (sum += transaction.value) : (sum -= transaction.value);
    if (transaction.type === "credit") {
      sum += transaction.value;
    } else if (transaction.type === "debit") {
      sum -= transaction.value;
    } else {
      console.log("The average can only be Credit or Debit");
      return false;
    }
  }
  return sum / user.transactions.length;
}

function getTransactionsCount() {
  let count = {
    credit: 0,
    debit: 0,
  };
  for (let transaction of user.transactions) {
    if (transaction.type === "credit") {
      count.credit++;
    } else if (transaction.type === "debit") {
      count.debit++;
    }
  }
  return count;
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
console.table(user.transactions);
console.log(user.balance);
console.log(
  "The Higher Credit Transaction was:",
  getHigherTransactionByType("credit")
);
console.log(
  "The Higher Debit Transaction was:",
  getHigherTransactionByType("debit")
);

console.log("The average was " + getAverageTransactionValue());
console.table(getTransactionsCount());
