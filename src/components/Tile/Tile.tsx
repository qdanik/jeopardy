import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';

type TileProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: 'title' | 'question'
}>

export const Tile: React.FC<TileProps> = ({ children, onClick, variant }) => {
  const className = styles.tile;
  const textClassName = classNames(styles.text, {
    [styles['tile-text--title']]: variant === 'title',
    [styles['tile-text--question']]: variant === 'question',
  });
  
  if (onClick) {
    return (
      <button type='button' className={className} onClick={onClick}>
        <span className={textClassName}>{children}</span>
      </button>
    );
  }

  return (
    <div className={className}>
      <p className={textClassName}>{children}</p>
    </div>
  );
}