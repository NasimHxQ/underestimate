// components/ui/Card.js

import styles from '../../styles/Home.module.css';

export default function Card({ children, className = '' }) {
  return (
    <div className={styles.card + ' ' + className}>
      {children}
    </div>
  );
}
