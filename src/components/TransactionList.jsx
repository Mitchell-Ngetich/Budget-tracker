import TransactionItem from './TransactionItem';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Your Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            transaction={transaction}
            index={index}
            deleteTransaction={deleteTransaction} className={transaction.type}
          />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
