import React, { useState, useEffect, useTransition } from 'react';
import HeroesList from './components/HeroesList';
import constants from '../constants/constants';

function ConcurrentApp (props) {
  const [startTransition, isPending] = useTransition({
    timeoutMs: constants.TRANSITION_TIMEOUT
  });

  // useEffect(() => {
  //   startTransition(() => {

  //   });
  // }, [props.pagination.low, props.pagination.high]);

  // useEffect and see when pagination changes, then set the pagination data in state
  // and start the transition!

  return (
    <div className="App">
      <div className="App-title">
        Concurrent Mode
      </div>
      <HeroesList
        low={props.pagination.low}
        high={props.pagination.high}
      />
      {/* <Pagination
        pagination={props.pagination}
        onChange={(paginationData) => {
          startTransition(() => {
            setPagination(paginationData);
          });
        }}
        // Use isPending to show loading state next to button
        isPending={isPending}
      /> */}
    </div>
  );
}

export default ConcurrentApp;
