import React, { Suspense } from 'react';
import { getHero } from '../services/DotaService';
import HeroSkeletonLoader from './HeroSkeletonLoader';
import { createResource } from '../services/ReactCache';
import DELAYS from '../constants/delays';

export default function HeroesList (props) {
  return (
    <div className='container'>
      <div className='hero-list'>
        <Suspense fallback={<HeroSkeletonLoader />}>
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
        </Suspense>
      </div>
    </div>
  );
}

const APIResource = createResource(getHero);

function Hero (props) {
  const hero = APIResource.read({ id: props.id, delay: props.delay });

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
