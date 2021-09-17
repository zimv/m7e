import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './styles.module.less';

interface Props {
  className?: string;
  logo: StaticImageData;
  name?: string;
  link: string;
}

export default function PartnerCard({ logo, link, name, className, ...props }: Props) {
  const cls = classnames(styles['partner-card'], className);
  return (
    <div {...props} className={cls}>
      <a href={link || '/'}>
        <Image src={logo} alt={name || 'logo'} object-fit="scale-down" />
      </a>
    </div>
  );
}
