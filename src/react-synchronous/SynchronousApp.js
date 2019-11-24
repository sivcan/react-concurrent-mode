import React from 'react';
import HeroesList from './components/HeroesList';;

function SynchronousApp (props) {
  return (
    <div className="App">
      <div className="App-title">
        Synchronous Mode
      </div>
      <HeroesList
        low={props.pagination.low}
        high={props.pagination.high}
        // low={props.pagination.low}
        // high={props.pagination.high}
      />
    </div>
  );
}

export default SynchronousApp;
