import React from 'react';
import { LIST_ITEMS_COUNT } from '../constants/constants';

export default function HeroSkeletonLoader () {
  return (
    <>
    {
      [...new Array(LIST_ITEMS_COUNT)].map((_, idx) => {
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
