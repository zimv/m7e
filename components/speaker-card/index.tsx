import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import bg1 from '../../public/images/bg1.png';
import bg2 from '../../public/images/bg2.png';
import styles from './styles.module.less';

interface Props {
  className?: string;
  avatar: StaticImageData;
  name: string;
  description: string;
}

export default function SpeakerCard({ avatar, name, description, className, ...props }: Props) {
  const cls = classnames(styles['speaker-card'], className);
  return (
    <div {...props} className={cls}>
      <div className="flex">
        <div className={styles.bg1}>
          <Image
            className={styles['bg1-img']}
            src={bg1}
            alt="logo"
            layout="fill"
            object-fit="contain"
          />
          <div className={styles['avatar-box']}>
            <Image className={styles.avatar} src={avatar} alt="avatar" width={100} height={100} />
          </div>
        </div>
        <div className={styles.bg2}>
          <Image src={bg2} alt="logo" layout="fill" object-fit="contain" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.block}></div>
        <span className={styles.title}>{name}</span>
        <span className={styles.title}>{description}</span>
      </div>
    </div>
  );
}
