import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

interface Props {
  className?: string;
  title: string;
}

export default function PageTitle({ title, className, ...props }: Props) {
  const cls = classnames(styles['page-title'], className);

  return (
    <div {...props} className={cls}>
      {title}
    </div>
  );
}
