import React, { useState } from 'react';

import logoLinkedin from '../../image/logos/logo-linkedin.png';
import menu from '../../image/icones/menu.svg';

import { Menu } from '../../components/Menu';

import * as Styled from './Header.styles';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Styled.Container
      mobileMenu={mobileMenuOpen}
      id="Header"
      className={mobileMenuOpen ? 'isOpen' : 'notOpen'}
    >
      <Styled.ContainerHeader mobileMenu={mobileMenuOpen}>
        <a
          id="logo"
          href="https://www.linkedin.com/in/ana-carolina-vasconcelos-510739183/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoLinkedin} alt="Link para Linkedin" />
        </a>

        <Styled.MenuIcon mobileMenu={mobileMenuOpen}>
          <img src={menu} alt="" onClick={toggleMobileMenu} />
        </Styled.MenuIcon>

        <Menu mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
      </Styled.ContainerHeader>
    </Styled.Container>
  );
}
