import React from 'react';
import classnames from 'classnames';
import TitleStar from '../../public/images/title-star.svg';

import styles from './styles.module.less';

interface Props {
  className?: string;
  title: string;
  subTitle?: string;
}

export default function PageTitle({ title, subTitle, className, ...props }: Props) {
  const cls = classnames(styles['page-title'], className);

  return (
    <div {...props} className={cls}>
      <div className="flex">
        {title}
        <TitleStar className={styles.star} />
      </div>
      <span className={styles.line}></span>
      <span className={styles.sub}>{subTitle}</span>
    </div>
  );
}
