import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getHero } from '../../services/DotaService';
import HeroSkeletonLoader from './HeroSkeletonLoader';
import HeroTile from '../../components/HeroTile';

export default function Hero (props) {
  const [hero, setHero] = useState({});

  // Fetch the hero
  useEffect(() => {
    let isSubscribed = true,
      opts = JSON.stringify({ id: props.id, delay: props.delay });

    setHero({});

    getHero(opts)
      .then((hero) => {
        // In case it's subscribed and the component gets unmounted,
        // then do not try to set the state of the unmounted component
        isSubscribed && ReactDOM.flushSync(() => setHero(hero));
      });

    // Ideally, it should cancel the call of the promise, but that isn't supported.
    // So, we use this isSubscribed variable to control the updating of the state
    // only when the component is mounted, otherwise the cleaner function will run
    // and clean it up.
    return () => { isSubscribed = false; };
  }, [props.id, props.delay]);

  if (!hero.localized_name) {
    return <HeroSkeletonLoader />;
  }

  return <HeroTile hero={hero} />;
}
