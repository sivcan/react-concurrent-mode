import React from 'react';
import constants from '../constants/constants';

export default function HeroSkeletonLoader () {
  return (
    <>
    {
      Array(constants.LIST_ITEMS_COUNT).fill(0).map((s, idx) => {
        return (
          <div
            key={`skeleton-${idx}`}
            className='hero-skeleton'
          >
            <div className='hero-skeleton-thumbnail'/>
            <div className='hero-skeleton-title' />
          </div>
        );
      })
    }
    </>
  );
}
