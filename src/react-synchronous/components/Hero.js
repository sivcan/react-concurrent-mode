import React, { useEffect, useState } from 'react';
import { getHero } from '../../services/DotaService';
import HeroSkeletonLoader from './HeroSkeletonLoader';

export default function Hero (props) {
  const [hero, setHero] = useState({});

  useEffect(() => {
    setHero({});

    let opts = JSON.stringify({ id: props.id, delay: props.delay });
    getHero(opts)
      .then((hero) => {
        setHero(hero);
      });
  }, [props.id, props.delay]);

  return (
    <>
    {
      !hero.localized_name ?
        <HeroSkeletonLoader /> :
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
    }
    </>
  );
}
