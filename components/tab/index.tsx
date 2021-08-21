import React, { useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  active?: boolean;
  name?: string;
  onClick?: (name: string) => void;
}

export default function Tab({ children, onClick, active = false, name = '' }: Props) {
  const [show, setShow] = useState(active);

  const onMouseOver = React.useCallback(() => {
    if (!active) {
      setShow(true);
    }
  }, [active]);
  const onMouseLeave = React.useCallback(() => {
    if (!active) {
      setShow(false);
    }
  }, [active]);

  const onTabClick = React.useCallback(() => {
    if (onClick) {
      onClick(name);
    }
  }, [name, onClick]);

  useEffect(() => {
    setShow(active);
  }, [active]);

  return (
    <div
      className="tabs-item relative mr-4 cursor-pointer"
      onMouseOver={() => onMouseOver()}
      onMouseLeave={onMouseLeave}
      onClick={onTabClick}
    >
      {children}
      <i
        style={{ display: show ? 'block' : 'none' }}
        className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-full h-px bg-purple-500"
      />
    </div>
  );
}
