import React from 'react';
import classnames from 'classnames';
import Circle from '../../public/images/circle_2.svg';
import Yellow from '../../public/images/yellow_1.svg';

import styles from './index.module.less';

export default function Activity2() {
  const cls = classnames('flex flex-col justify-center items-end', styles.container);
  return (
    <div className="relative flex justify-end items-center w-screen h-screen bg-black">
      <Circle className={styles.circle} />
      <div className={cls}>
        <div className={styles.title}>
          <Yellow />
          NFT Avatar Carnival
        </div>
        <div className={styles.description}>
          <div className={styles.group}>
            <div>Owner: MyNFT</div>
            <div>主办 MyNFT</div>
          </div>
          <div className={styles.group}>
            <div>Time: September 11th, 2021</div>
            <div>时间：2021 年 9 月 11 日</div>
          </div>
          <div className={styles.group}>
            <div>Venue: Metaverse & M50 Innovation+ Space</div>
            <div>场地：元宇宙和M50 创+ 空间</div>
          </div>
          <div className={styles.long}>
            Invite popular avatar NFT projects and communities at home and abroad to meet and
            exchange in the metaverse and offline
          </div>
          <div>邀请海内外热门头像NFT项目和社区在元宇宙和线下聚会交流</div>
        </div>
      </div>
    </div>
  );
}
