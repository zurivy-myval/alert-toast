import React from 'react';
import styles from './Button.module.scss';

type Props = React.PropsWithChildren<{
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}>;

export const Button: React.FC<Props> = ({ children, onClick, variant = 'primary', disabled }) => {
  return (
    <button className={styles[variant]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};