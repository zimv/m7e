import React from 'react';

import styles from './styles.module.css';

export default function MagicCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}
