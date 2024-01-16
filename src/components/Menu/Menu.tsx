import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';

import close from '../../image/icones/close.svg';

import * as Styled from './Menu.styles';

interface MenuProps {
  toggleMenu: () => void;
  mobileMenuOpen: boolean;
}

export function Menu({ mobileMenuOpen, toggleMenu }: MenuProps) {
  const handleCloseMenuWithDelay = () => {
    toggleMenu();
  };

  return (
    <Styled.Container>
      <Styled.MenuIcon mobileMenu={mobileMenuOpen}>
        <img src={close} alt="" onClick={toggleMenu} />
      </Styled.MenuIcon>

      <Styled.ListaLink mobileMenu={mobileMenuOpen}>
        <Link to={`/`}>Início</Link>

        <Button
          label="Desenvolvimento Web"
          variant="text"
          targetId="DesenvolvimentoWeb"
          onClick={handleCloseMenuWithDelay}
        />
        <Button
          label="Design UX/UI"
          variant="text"
          targetId="Design"
          onClick={handleCloseMenuWithDelay}
        />
        <Button
          label="Ver mais Trabalhaos"
          variant="text"
          targetId="VerMaisTrabalhos"
          onClick={handleCloseMenuWithDelay}
        />
      </Styled.ListaLink>
    </Styled.Container>
  );
}
