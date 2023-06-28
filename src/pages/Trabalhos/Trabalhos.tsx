import React from 'react';
import arrowBG from '../../image/arrowContainer.svg';
import { ProjetoCapsula } from './CardsProjetos/ProjetoCapsula';
import { ProjetoCronometro } from './CardsProjetos/ProjetoCronometro';
import { ProjetoEcommerce } from './CardsProjetos/ProjetoEcommerce';
import { ProjetoOrganizi } from './CardsProjetos/ProjetoOrganizi';

import * as Styled from './Trabalhos.styles';

export function Trabalhos() {
  return (
    <Styled.Container id="PaginaTrabalhos">
      <Styled.BG src={arrowBG} alt="" />
      <Styled.Content>
        <Styled.H3 id="DesenvolvimentoWeb">Desenvolvimento Web</Styled.H3>
        <ProjetoCapsula />
        <ProjetoCronometro />
        <Styled.H3S id="DesignUXUI">Design UX/UI</Styled.H3S>
        <ProjetoEcommerce />
        <ProjetoOrganizi />
      </Styled.Content>
    </Styled.Container>
  );
}
