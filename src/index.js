import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.svg';
import './App.scss';
import ConcurrentApp from './react-concurrent/ConcurrentApp';
import SynchronousApp from './react-synchronous/SynchronousApp';
import constants from './constants/constants';
import Pagination from './components/Pagination';

function App () {
  const [pagination, setPagination] = useState({ low: 1, high: constants.LIST_ITEMS_COUNT });

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container">
        <SynchronousApp pagination={pagination} />
        <ConcurrentApp pagination={pagination} />
      </div>
      <Pagination
        pagination={pagination}
        onChange={setPagination}
      />
    </div>
  );
}

const root = document.getElementById('root');

// This makes React use the Concurrent Mode
ReactDOM.createRoot(root).render(<App />);
