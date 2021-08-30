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
        <span className={styles.like}>@</span>
        <span className={styles.num}>102</span>
      </div>
      <div className={styles.body}>
        <div className={styles.tit}>
          <div className={styles.name}>Self Awakened</div>
        </div>
        <div className={styles.prod}>
          <Image src={avatar} alt="production" />
        </div>
      </div>
      <div className={styles.hip}>
        <div className={styles.l}>medlo</div>
        <div className={styles.r}>divoq</div>
      </div>
      <div className={styles.footer}>{text}</div>
    </div>
  );
}
