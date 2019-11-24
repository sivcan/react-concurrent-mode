import React from 'react';
import { getLimits } from '../services/DotaService';
import constants from '../constants/constants';

export default function Pagination (props) {

  function handleLeft () {
    let limits = getLimits(),
      low = props.pagination.low - constants.LIST_ITEMS_COUNT,
      high = props.pagination.high - constants.LIST_ITEMS_COUNT;

    if (low < limits.low) {
      low = limits.low;
      high = limits.low + constants.LIST_ITEMS_COUNT;
    }

    props.onChange({ low, high });
  }

  function handleRight () {
    let limits = getLimits(),
      low = props.pagination.low + constants.LIST_ITEMS_COUNT,
      high = props.pagination.high + constants.LIST_ITEMS_COUNT;

    if (high > limits.high) {
      high = limits.high;
      low = limits.high - constants.LIST_ITEMS_COUNT;
    }

    props.onChange({ low, high });
  }

  return (
    <div className='pagination'>
      <div
        className='pagination-btn'
        onClick={handleLeft}
      >
        <svg width="32px" xmlns="http://www.w3.org/2000/svg" data-name="SOLID BLACK" viewBox="0 0 32 30" x="0px" y="0px">
          <path
            style={{fill: '#FFFFFF'}}
            d="M27,1H5A4,4,0,0,0,1,5V27a4,4,0,0,0,4,4H27a4,4,0,0,0,4-4V5A4,4,0,0,0,27,1ZM21.78,20.38a3,3,0,0,1-1.5,2.6,2.95,2.95,0,0,1-3,0L9.68,18.6a3,3,0,0,1,0-5.2L17.28,9a3,3,0,0,1,4.5,2.6Z"
            />
        </svg>
      </div>
      <div
        className='pagination-btn'
        onClick={handleRight}
      >
        <svg width="32px" xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" data-name="SOLID BLACK" viewBox="0 0 32 30" x="0px" y="0px">
          <path
            style={{fill: '#FFFFFF'}}
            d="M27,1H5A4,4,0,0,0,1,5V27a4,4,0,0,0,4,4H27a4,4,0,0,0,4-4V5A4,4,0,0,0,27,1ZM21.78,20.38a3,3,0,0,1-1.5,2.6,2.95,2.95,0,0,1-3,0L9.68,18.6a3,3,0,0,1,0-5.2L17.28,9a3,3,0,0,1,4.5,2.6Z"
            />
        </svg>
      </div>
    </div>
  );
}