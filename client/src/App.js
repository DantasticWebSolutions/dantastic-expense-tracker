import React from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import PlusSign from './components/PlusSign';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <PlusSign/>
      </div>
    </GlobalProvider>
  );
}

export default App;
