import React, { useState } from 'react';
import styles from './Alert.module.scss';
import { Button } from '@/components/Button/Button';

type Props = React.PropsWithChildren<{
  variant?: 'error' | 'success';
  title: string;
  moreLink?: string;
}>;

export const Alert: React.FC<Props> = ({ children, title = '', variant = 'error', moreLink = '#' }) => {
   const [hidden, setHidden] = useState(false);


  return (
    <div role="alert" className={`${styles.alert} ${styles[variant]} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.alertContentContainer}>
        <h2 id="alert-title">{title}</h2>
        <p>{children}</p>
        {moreLink && (
          <Button hrefLink={moreLink} variant={variant}>
            View more
          </Button>
        )}
      </div>
      <div className={styles.alertCloseContainer}>
        <button onClick={() => setHidden(true)}>
          <img src="/images/ico-close.svg" width="12" height="12" alt="Close icon" />
        </button>
      </div>
    </div>
  );
};