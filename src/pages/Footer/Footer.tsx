import React from 'react';

import arrow from '../../../src/image/arrowLaying3.svg';
import linkedin from '../../image/logos/linkedin.svg';
import outlook from '../../image/logos/outlook.svg';
import whatsapp from '../../image/logos/whatsapp.svg';

import * as Styled from './Footer.styles';

export function Footer() {
  return (
    <Styled.Container id="Contatos">
      <div>
        <img src={arrow} alt="" />
      </div>
      <div>
        <p>&copy; 2023 Caroldelira</p>
      </div>
      <Styled.Contatos>
        <a
          href="https://www.linkedin.com/in/ana-carolina-vasconcelos-510739183/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Link para Linkedin" />
        </a>
        <a
          href="mailto:caroldelira@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={outlook} alt="Link para Email" />
        </a>
        <a href="https://wa.me/55986326888" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Chat no WhatsApp" />
        </a>
      </Styled.Contatos>
    </Styled.Container>
  );
}
