import React, { ReactNode } from 'react';

import * as Styled from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  targetId?: string;
  variant: 'text' | 'default';
  children?: ReactNode;
}

export function Button({
  label,
  targetId,
  variant,
  children,
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

  return (
    <Styled.Button variant={variant} onClick={handleClick} {...props}>
      {label}
      {children}
    </Styled.Button>
  );
}
