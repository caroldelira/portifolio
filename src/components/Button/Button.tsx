import React from 'react';

import * as Styled from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  targetId?: string;
}

export function Button({ label, targetId, ...props }: ButtonProps) {
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
    <Styled.Button onClick={handleClick} {...props}>
      {label}
    </Styled.Button>
  );
}
