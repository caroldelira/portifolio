import React, { useState } from 'react';
import { Button } from '../../components/Button';

import close from '../../image/icones/close.svg';

import * as Styled from './Menu.styles';

interface MenuProps {
  toggleMenu: () => void;
  mobileMenuOpen: boolean;
}

export function Menu({ mobileMenuOpen, toggleMenu }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };

  const handleCloseMenuWithDelay = () => {
    handleButtonClick();
  };

  return (
    <Styled.Container mobileMenu={mobileMenuOpen}>
      <Styled.MenuIcon mobileMenu={mobileMenuOpen}>
        <img src={close} alt="" onClick={handleButtonClick} />
      </Styled.MenuIcon>

      <Styled.ListaLink mobileMenu={mobileMenuOpen}>
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
