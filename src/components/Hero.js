import React, { useEffect, useState } from 'react';
import { getHero } from '../services/DotaService';
import HeroSkeletonLoader from './HeroSkeletonLoader';
import HeroCard from './HeroCard';

export default function Hero (props) {
  const [hero, setHero] = useState({});

  useEffect(() => {
    let opts = JSON.stringify({ id: props.id, delay: props.delay });

    getHero(opts).then((hero) => {
      setHero(hero);
    });
  }, [props.id, props.delay]);

  return (
    <>
    {
      !hero.localized_name
        ? <HeroSkeletonLoader />
        : <HeroCard hero={hero} />
    }
    </>
  );
}
