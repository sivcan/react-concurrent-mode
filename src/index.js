import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.svg';
import './App.scss';
import ConcurrentApp from './react-concurrent/ConcurrentApp';
import SynchronousApp from './react-synchronous/SynchronousApp';
import Pagination from './components/Pagination';
import {
  SYNC,
  CONCURRENT,
  LIST_ITEMS_COUNT
} from './constants/constants';
import Toggle from './components/Toggle';

function App () {
  const [pagination, setPagination] = useState({ low: 1, high: LIST_ITEMS_COUNT }),
    [modes, setModes] = useState({ [SYNC]: true, [CONCURRENT]: false });

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle
          modes={modes}
          setModes={setModes}
        />
      </header>
      <div className="App-container">
        {
          modes[SYNC] && <SynchronousApp pagination={pagination} />
        }
        {
          modes[CONCURRENT] && <ConcurrentApp pagination={pagination} />
        }
      </div>
      <Pagination
        pagination={pagination}
        onChange={setPagination}
      />
    </div>
  );
}

const root = document.getElementById('root');

// The old way to initialize (sync mode)
// ReactDOM.render(<App />, root);

// This makes React use the Concurrent Mode (async)
ReactDOM.createRoot(root).render(<App />);
