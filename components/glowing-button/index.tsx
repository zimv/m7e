import React from 'react';
import classnames from 'classnames';

import './styles.less';

interface Props {
  type: string;
}

export default function GlowingButton({ children, className, ...props }) {
  return (
    <button {...props} className={classnames('glowing-button', className)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}
