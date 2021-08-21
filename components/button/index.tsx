import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import classnames from 'classnames';

import styles from './styles.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'primary' | 'ghost' | 'gradient' | 'submit' | 'gray' | 'text' | 'gradientBorder';
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  children,
  type = 'primary',
  className,
  loading = false,
  disabled = false,
  ...props
}: Props) {
  const cls = classnames(styles.btn, className, {
    [styles['btn-primary']]: type === 'primary',
    [styles['btn-ghost']]: type === 'ghost',
    [styles['btn-gradient']]: type === 'gradient',
    [styles['btn-gray']]: type === 'gray',
    [styles['btn-text']]: type === 'text',
    [styles['btn-loading']]: loading,
    [styles['btn-disabled']]: disabled,
    [styles['btn-gradientBorder']]: type === 'gradientBorder',
  });

  if (type === 'ghost') {
    return (
      <button style={{ overflow: 'hidden', borderRadius: 24 }}>
        <span {...props} className={cls}>
          {children}
        </span>
      </button>
    );
  }

  if (type === 'gradientBorder') {
    return (
      <button>
        <span {...props} className={cls}>
          <span>{children}</span>
          <span className="bg-white">{children}</span>
        </span>
      </button>
    );
  }

  const render = () => {
    if (loading) {
      return (
        // @ts-ignore
        <button {...props} className={cls}>
          <LoadingOutlined style={{ marginRight: 8 }} />
          <span>{children}</span>
        </button>
      );
    }

    return (
      // @ts-ignore
      <button {...props} className={cls}>
        {children}
      </button>
    );
  };

  return render();
}
