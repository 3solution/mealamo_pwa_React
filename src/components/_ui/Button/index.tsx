import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'reset' | 'submit';
  colorType?: 'primary' | 'secondary';
};

const Button: React.FC<Props> = ({
  label,
  className = '',
  onClick,
  type = 'button',
  colorType = 'primary',
}) => (
  <button
    type={type}
    className={classNames(styles.wrapper, className, styles[colorType])}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
