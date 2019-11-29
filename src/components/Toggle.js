import React from 'react';
import classnames from 'classnames';
import { SYNC, CONCURRENT } from '../constants/constants';

export default function Toggle ({ modes, setModes }) {
  const handleMode = (mode) => {
      localStorage.setItem(mode, !modes[mode]);
      setModes({ ...modes, [mode]: !modes[mode] });
    },
    getCheckboxClass = (mode) => {
      return classnames({
        'App-header__toggle-menu-item__checkbox': true,
        'is-enabled': modes[mode]
      });
    }

  return (
    <div className='App-header__toggle-menu'>
      <div
        className='App-header__toggle-menu-item'
        onClick={handleMode.bind(this, SYNC)}>
        <div className={getCheckboxClass(SYNC)}>
          { modes[SYNC] && <div className='enabled'/> }
        </div>
        <div className='label'>Synchronous Mode</div>
      </div>
      <div
        className='App-header__toggle-menu-item'
        onClick={handleMode.bind(this, CONCURRENT)}
      >
        <div className={getCheckboxClass(CONCURRENT)}>
          { modes[CONCURRENT] && <div className='enabled'/> }
        </div>
        <div className='label'>Concurrent Mode</div>
      </div>
    </div>
  )
}