import React from 'react';
import { Button } from '../../components/Button';

import * as Styled from './Header.styles';

export function Header() {
  return (
    <Styled.Container>
      <Styled.ListaLink>
        <Button label='Desenvolvimento Web' variant='text' targetId='DesenvolvimentoWeb' />
        <Button label='Design UX/UI' variant='text' targetId='DesignUXUI' />
        <Button label='Ver mais Trabalhaos' variant='text' targetId='VerMaisTrabalhos' />
        <Button label='Contatos' variant='text' targetId='Contatos' />
      </Styled.ListaLink>
    </Styled.Container>
  );
}
