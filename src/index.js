import React, { useState, useTransition } from 'react';
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
    [modes, setModes] = useState({ [SYNC]: true, [CONCURRENT]: false }),
    [startTransition, isPending] = useTransition({ timeoutMs: 3000 });

  function handlePagination (pagination) {
    // Demo - when in concurrent mode, we can use the useTransition hook
    // and wait for the timeout to fire!
    // Also, gives us the nice `isPending` boolean to be true
    // using which we can show a loader on the current screen
    // till the next screen is completely rendered and ready to be committed
    if (!modes[SYNC] && modes[CONCURRENT]) {
      startTransition(() => {
        setPagination(pagination);
      });

      return;
    }

    setPagination(pagination);
  }

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
        isPending={isPending}
        pagination={pagination}
        onChange={handlePagination}
      />
    </div>
  );
}

const root = document.getElementById('root');

// The old way to initialize (sync mode)
// ReactDOM.render(<App />, root);

// This makes React use the Concurrent Mode (async)
ReactDOM.createRoot(root).render(<App />);
