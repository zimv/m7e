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
      <a href={link || '/'} className="flex flex-col justify-center">
        <Image src={logo} alt={name || 'logo'} object-fit="scale-down" />
        <span className="mt-4" style={{ fontSize: '16rem' }}>
          {name}
        </span>
      </a>
    </div>
  );
}
