import React from 'react';
import HeroesList from './components/HeroesList';
import Spinner from '../components/Spinner';

function ConcurrentApp (props) {
  return (
    <div className="App">
      <div className="App-title">
        Concurrent Mode
        {
          props.isPending &&
            <div className='spinner'>
              <Spinner />
            </div>
        }
      </div>
      <HeroesList
        low={props.pagination.low}
        high={props.pagination.high}
      />
    </div>
  );
}

export default ConcurrentApp;
