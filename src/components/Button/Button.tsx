import React, { ReactNode } from 'react';

import * as Styled from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  targetId?: string;
  variant: 'text' | 'default';
  children?: ReactNode;
  onClick?: () => void;
}

export function Button({
  label,
  targetId,
  variant,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const handleClick = () => {
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleButtonWithDelay = () => {
    handleClick();
    if (onClick) {
      setTimeout(() => {
        onClick();
      }, 650);
    }
  };

  return (
    <Styled.Button variant={variant} onClick={handleButtonWithDelay} {...props}>
      {label}
      {children}
    </Styled.Button>
  );
}
