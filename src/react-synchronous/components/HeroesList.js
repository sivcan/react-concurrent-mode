import React from 'react';
import Hero from './Hero';
import DELAYS from '../../constants/delays';

export default function HeroesList (props) {
  return (
    <div className='container'>
      <div className='hero-list'>
        <Hero
         id={props.low}
         delay={DELAYS.HERO_1}
        />
        <Hero
          id={props.low + 1}
          delay={DELAYS.HERO_2}
        />
        <Hero
          id={props.low + 2}
          delay={DELAYS.HERO_3}
        />
        <Hero
          id={props.low + 3}
          delay={DELAYS.HERO_4}
        />
      </div>
    </div>
  );
}