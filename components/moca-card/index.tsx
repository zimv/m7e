import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './styles.module.less';

interface Props {
  className?: string;
  avatar: StaticImageData;
  name: string;
  text: string;
}

export default function MocaCard({ avatar, text, className, ...props }: Props) {
  const cls = classnames(styles['moca-card'], className);
  return (
    <div {...props} className={cls}>
      <div className={styles.header}>
        <div className={styles.name}>Self Awakened</div>
        <img src="/images/like.png" className={styles.like}></img>
        <span className={styles.num}>102</span>
      </div>
      <div className={styles.body}>
        <div className={styles.tit}>{/* <div className={styles.name}>Self Awakened</div> */}</div>
        <div className={styles.prod}>
          <Image src={avatar} alt="production" />
        </div>
      </div>
      <div className={styles.hip}>
        <div className={styles.l}>
          <img src="/images/moca-smile.png" className={styles.smile}></img>
          <span>Medlo</span>
        </div>
        <div className={styles.r}>
          <a href="#" className={styles.link}>
            OPENSEA
          </a>
          <a href="#" className={styles.link}>
            Twitter
          </a>
        </div>
      </div>
      <div className={styles.footer}>{text}</div>
    </div>
  );
}
