import React from 'react';
import HeroesList from './components/HeroesList';

function ConcurrentApp (props) {
  return (
    <div className="App">
      <div className="App-title">
        Concurrent Mode
      </div>
      <HeroesList
        low={props.pagination.low}
        high={props.pagination.high}
      />
    </div>
  );
}

export default ConcurrentApp;
