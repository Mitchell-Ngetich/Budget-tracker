import { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleAddTransaction = () => {
    if (name && amount) {
      addTransaction({ name, amount, type });
      setName('');
      setAmount('');
      setType('expense');
    }
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
}

export default TransactionForm;
