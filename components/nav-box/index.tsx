import React from 'react';
import classnames from 'classnames';
import { useHover } from '@react-aria/interactions';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  textComponent: React.ReactNode;
  iconComponent?: React.ReactNode;
}

export default function NavBox({
  className,
  textComponent,
  iconComponent,
  ...props
}: Props) {
  const {hoverProps, isHovered} = useHover({});
  const cls = classnames(styles['nav-box'], className);

  return (
    <div 
      {...props}
      {...hoverProps} 
      className={cls}
    >
      {
        iconComponent && !isHovered ? iconComponent : textComponent
      }
    </div>
  );
}