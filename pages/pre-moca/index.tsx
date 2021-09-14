import React from 'react';
import classnames from 'classnames';
import Circle from '../../public/images/circle_2.svg';
import Yellow from '../../public/images/yellow_1.svg';

import styles from './index.module.less';

export default function Pre() {
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
            <div>Hosted by MOCA</div>
            <div>主办：加密艺术美术馆</div>
          </div>
          <div className={styles.group}>
            <div>Sponsored by My Crypto Profile</div>
            <div>赞助：My Crypto Profile</div>
          </div>
          <div className={styles.group}>
            <div>Time: October 22th - 28th, 2021</div>
            <div>时间：2022 年 10 月 22 日至 28 日</div>
          </div>
          <div className={styles.group}>
            <div>Venue: MOCA at Somnium Space and Decentraland & M50 Innovation+ Space</div>
            <div>场 地：在元宇宙 Somnium Space 和 Decentraland 的 MOCA 展馆和上海 M50 创+空间</div>
          </div>
          <div className={styles.long}>
            10 Asian and 10 global artists are invited to create digital artworks independently
            and/or in pair around the theme for exhibition and interaction and NFT sales
          </div>
          <div className={styles.long}>
            邀请 10 位亚洲和 10 位全球艺术家围绕主题独立和/或配对创作数字艺术品进行展出和 互动和
          </div>

          <div>
            Crypto art lovers, collectors and NFT/metaverse enthusiasts around the world are welcome
            to visit the exhibition
          </div>
          <div>欢迎全世界加密艺术爱好者、收藏者和 NFT/元 宇宙爱好者观展</div>
        </div>
      </div>
    </div>
  );
}
