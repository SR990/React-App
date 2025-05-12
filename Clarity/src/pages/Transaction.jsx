import React, { useState } from 'react';
import transactions from '../data/transactions.json';

const Transactions = () => {
  
  const [filter, setFilter] = useState('All');

  
  const filteredTransactions = transactions.filter((txn) => {
    return filter === 'All' || txn.status === filter;
  });

  
  const tabs = ['All', 'Sent', 'Received'];

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">Transactions</h2>

    
        <div className="flex gap-4 border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${
                filter === tab
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        
        {filteredTransactions.map((txn) => (
          <div
            key={txn.id}
            className="bg-white border rounded-md p-4 mb-4 shadow-sm"
          >
            <div className="flex justify-between text-sm text-gray-500">
              <span>{txn.date}</span>
              <span>{txn.time}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`${
                    txn.status === 'Received' ? 'text-green-500' : 'text-red-500'
                  } text-xl`}
                >
                  {txn.status === 'Received' ? '↗' : '✓'}
                </span>
                <div>
                  <div className="font-semibold text-lg">{txn.amount}</div>
                  <div className="text-sm text-gray-500">
                    {txn.type} ({txn.currency})
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
