import React from 'react';

import * as Styled from './Button.styles';

interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return <Styled.Button>{label}</Styled.Button>;
}
