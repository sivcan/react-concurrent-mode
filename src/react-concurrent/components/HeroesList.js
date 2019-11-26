import React, { Suspense } from 'react';
import { getHero } from '../../services/DotaService';
import HeroSkeletonLoader from '../../components/HeroSkeletonLoader';
import { createResource } from '../../services/ReactCache';
import DELAYS from '../../constants/delays';
import HeroTile from '../../components/HeroTile';

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

// Create a resource for react-cache
const APIResource = createResource(getHero);

function Hero (props) {
  // Read from the resource.
  // Internally, it returns a promise.
  // It determines if it's a cache-hit / fetches in case of a cache-miss
  const hero = APIResource.read({ id: props.id, delay: props.delay });

  return <HeroTile hero={hero} />;
}
