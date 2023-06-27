import React from 'react';
import { Card } from '../../../components/Card';

import imgCard1 from '../../../image/projetoCapsula.png';
import ts from '../../../image/logos/ts.svg';
import next from '../../../image/logos/next.svg';
import tw from '../../../image/logos/tw.svg';
import prisma from '../../../image/logos/prisma.svg';
import react from '../../../image/logos/react.svg';

export function ProjetoCapsula() {
  return (
    <Card
      color="green"
      imageCard={imgCard1}
      imageLogo={[react, ts, next, tw, prisma]}
      titulo="Spacetime - RocketSeat"
      redeSocial="GitHub"
      link="https://github.com/caroldelira/nlwspacetime"
      desc="O projeto Spacetime foi desenvolvido durante o evento NLW da RocketSeat. Trata-se de um diário de bordo completo, que permite aos usuários registrar suas experiências por meio de imagens, vídeos e textos, armazenando tudo em uma linha do tempo interativa."
      tecnology={['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma']}
      descTec={[
        'Uma biblioteca JavaScript de código aberto.',
        'Adiciona tipagem estática ao JavaScript.',
        'Um framework React que facilita a construção de aplicativos web do lado do servidor.',
        'Um framework CSS que oferece uma abordagem de desenvolvimento baseada em componentes',
        'Fornece uma interface simplificada para interagir com o banco de dados.',
      ]}
    />
  );
}
