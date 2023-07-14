import React, { useState } from 'react';
import { Button } from '../../components/Button';

import menu from '../../image/icones/menu.svg';
import close from '../../image/icones/close.svg';
import logoLinkedin from '../../image/logos/logo-linkedin.png';

import * as Styled from './Header.styles';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /*   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; */

  console.log(setMenuOpen);

  return (
    <Styled.Container id="Header">
      <Styled.MenuIcon>
        {menuOpen ? <img src={close} alt="" /> : <img src={menu} alt="" />}
      </Styled.MenuIcon>
      <Styled.ContainerHeader>
        <a
          href="https://www.linkedin.com/in/ana-carolina-vasconcelos-510739183/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoLinkedin} alt="Link para Linkedin" />
        </a>

        <Styled.ListaLink>
          <Button
            label="Desenvolvimento Web"
            variant="text"
            targetId="DesenvolvimentoWeb"
          />
          <Button label="Design UX/UI" variant="text" targetId="Design" />
          <Button
            label="Ver mais Trabalhaos"
            variant="text"
            targetId="VerMaisTrabalhos"
          />
          <Button label="Contatos" variant="text" targetId="Contatos" />
        </Styled.ListaLink>
      </Styled.ContainerHeader>
    </Styled.Container>
  );
}
