import React from 'react';

export default function HeroCard ({ hero }) {
  return (
    <div className='hero'>
      <img 
        className='hero-thumbnail'
        src={hero.url_full_portrait}
        alt={hero.localized_name}
      />
      <div className='hero-title'>
        {hero.localized_name}
      </div>
    </div>
  );
}
