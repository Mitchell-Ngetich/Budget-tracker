import { useState, useEffect } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    calculateBalance()
  }, [transactions])

  const calculateBalance = () => {
    let total = 0
    transactions.forEach((transaction) => {
     if (transaction.type === "income") {
      total += parseFloat(transaction.amount)
     } else {
      total -= parseFloat(transaction.amount)
     }
    });
     setBalance(total)
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions]
    updatedTransactions.splice(index, 1)
    setTransactions(updatedTransactions)
  };

  const calculateTotalIncome = () => {
  return transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
};

const calculateTotalExpenses = () => {
  return transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
};


  return (
    <>
    <h1>Budget Tracker App</h1>
    <TransactionForm addTransaction={addTransaction} />
    <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    
     <p>Total Income: ${calculateTotalIncome()}</p>
    <p>Total Expenses: ${calculateTotalExpenses()}</p>
    <p>Current Balance: ${balance}</p>
    </>
  )
}

export default App;
