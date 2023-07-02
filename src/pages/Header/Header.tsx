import React, { useState } from 'react';
import { Button } from '../../components/Button';

import menu from '../../image/icones/menu.svg'
import close from '../../image/icones/close.svg'

import * as Styled from './Header.styles';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

/*   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; */

  return (
    <Styled.Container id='Header'>
      <Styled.MenuIcon>
        {menuOpen ? <img src={close} alt='' /> : <img src={menu} alt='' />}
      </Styled.MenuIcon>
      <Styled.ListaLink>
        <Button label='Desenvolvimento Web' variant='text' targetId='DesenvolvimentoWeb' />
        <Button label='Design UX/UI' variant='text' targetId='DesignUXUI' />
        <Button label='Ver mais Trabalhaos' variant='text' targetId='VerMaisTrabalhos' />
        <Button label='Contatos' variant='text' targetId='Contatos' />
      </Styled.ListaLink>
    </Styled.Container>
  );
}
