import React from 'react';

function TransactionItem({ transaction, index, deleteTransaction }) {
  return (
    <li>
      {transaction.name} - ${transaction.amount} ({transaction.type})
      <button onClick={() => deleteTransaction(index)}>Delete</button>
    </li>
  );
}

export default TransactionItem;
