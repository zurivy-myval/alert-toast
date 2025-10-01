import React from 'react';
import styles from './Button.module.scss';

type Props = React.PropsWithChildren<{
  variant?: 'error' | 'success';
  hrefLink?: string;
}>;

export const Button: React.FC<Props> = ({ children, hrefLink = '#' , variant = 'error' }) => {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={hrefLink}>
      <img src="/images/ico-eye.svg" alt="View more ico" width="12" height="12" /> {children}
    </a>
  );
};