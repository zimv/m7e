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
          M50
        </div>
        <div className={styles.description}>
          <div className={styles.group}>
            <div>Owner: CryptoC, NFT4Metaverse</div>
            <div>主办：CryptoC，元宇宙特攻队</div>
          </div>
          <div className={styles.group}>
            <div>Time: September 9th, 2021</div>
            <div>时间：2021 年 9 月 9 日全天</div>
          </div>
          <div className={styles.group}>
            <div>Venue: M50 Innovation+ Space, Shanghai</div>
            <div>场地：上海 M50 创+ 空间</div>
          </div>
          <div className={styles.long}>
            Invite artists, curators, founders, executives, investors and KOLs as speakers to share
            their thoughts on SSI, NFT avatars, Metaverse, etc
          </div>
          <div>
            邀请艺术家、策展人、区块链项目创始人、科技巨头高管、投资人、意见领袖作为嘉宾围绕用户自主身份、NFT
            头像、元宇宙等话题分享交流
          </div>
        </div>
      </div>
    </div>
  );
}
