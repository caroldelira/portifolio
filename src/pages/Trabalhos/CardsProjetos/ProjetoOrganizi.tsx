import React from 'react';
import { Card } from '../../../components/Card';

import imgCard3 from '../../../image/projetoOrganizi.png';
import figma from '../../../image/logos/figma.svg';

export function ProjetoOrganizi() {
  return (
    <Card
      imageCard={imgCard3}
      imageLogo={[figma]}
      color="blue"
      titulo="UX/UI de App Organizi"
      redeSocial="Behance"
      link="https://www.behance.net/gallery/141518937/Projeto-Organizi"
      desc="Projeto desenvolvido durante uma mentoria UX, focado em criar uma solução abrangente para rotinas financeiras básicas e controle de compras. O produto resultante envolveu uma extensa pesquisa de UX, testes de usabilidade, criação de matriz CSD (Contexto, Solução, Dificuldade), mapeamento de jornadas do usuário e arquitetura da informação. Além disso, foram criados protótipos de baixa, média e alta fidelidade, culminando em um protótipo funcional."
      tecnology={['Figma']}
      descTec={['Ferramenta de design de interface.']}
    />
  );
}
