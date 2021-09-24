import React from 'react';
import classnames from 'classnames';
import Circle from '../../public/images/circle_1.svg';

import styles from './index.module.less';

export default function Activity1() {
  const cls = classnames('flex flex-col justify-center items-start', styles.container);
  return (
    <div className="relative flex justify-start items-center w-screen h-screen bg-black">
      <Circle className={styles.circle} />
      <div className={cls}>
        <div className={styles.title}>
          <span></span>
          AirDrop List
        </div>

        <div className="w-full grid grid-cols-3 gap-4">
          <div className="bg-black h-12 rounded-md flex items-center justify-center text-white text-2xl font-extrabold text-white">
            <a href="https://magic.goatnft.io">MagicGOAT</a>
          </div>
        </div>
      </div>
    </div>
  );
}
