import React from 'react';
import arrowBG from '../../image/arrowContainer.svg'

import { Card } from '../../components/Card';

import imgCard1 from '../../image/card1.png'
import ts from '../../image/logos/ts.svg'
import next from '../../image/logos/next.svg'
import tw from '../../image/logos/tw.svg'
import prisma from '../../image/logos/prisma.svg'
import react from '../../image/logos/react.svg'


import * as Styled from './Trabalhos.styles'

export function Trabalhos() {
  return (
    <Styled.Container>
      <Styled.BG src={arrowBG} alt="" />
      <Styled.Content>
        <Styled.H3>Desenvolvimento Web</Styled.H3>
          <Card
            imageCard={imgCard1}
            imageLogo={[react, ts, next, tw, prisma]}
            titulo='Spacetime - RocketSeat'
            redeSocial='GitHub'
            desc='O projeto Spacetime foi desenvolvido durante o evento NLW da RocketSeat. Trata-se de um diário de bordo completo, que permite aos usuários registrar suas experiências por meio de imagens, vídeos e textos, armazenando tudo em uma linha do tempo interativa.'
            tecnology={['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma']}
            descTec={['Uma biblioteca JavaScript de código aberto.', 'Adiciona tipagem estática ao JavaScript.', 'Um framework React que facilita a construção de aplicativos web do lado do servidor.', 'Um framework CSS que oferece uma abordagem de desenvolvimento baseada em componentes', 'Fornece uma interface simplificada para interagir com o banco de dados.' ]}
          />
          <Card
            imageCard={imgCard1}
            imageLogo={[react, ts, next, tw, prisma]}
            titulo='Spacetime - RocketSeat'
            redeSocial='GitHub'
            desc='O projeto Spacetime foi desenvolvido durante o evento NLW da RocketSeat. Trata-se de um diário de bordo completo, que permite aos usuários registrar suas experiências por meio de imagens, vídeos e textos, armazenando tudo em uma linha do tempo interativa.'
            tecnology={['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma']}
            descTec={['Uma biblioteca JavaScript de código aberto.', 'Adiciona tipagem estática ao JavaScript.', 'Um framework React que facilita a construção de aplicativos web do lado do servidor.', 'Um framework CSS que oferece uma abordagem de desenvolvimento baseada em componentes', 'Fornece uma interface simplificada para interagir com o banco de dados.' ]}
          />
        <Styled.H3S>UX/UI</Styled.H3S>
        <Card
            imageCard={imgCard1}
            imageLogo={[react, ts, next, tw, prisma]}
            titulo='Spacetime - RocketSeat'
            redeSocial='GitHub'
            desc='O projeto Spacetime foi desenvolvido durante o evento NLW da RocketSeat. Trata-se de um diário de bordo completo, que permite aos usuários registrar suas experiências por meio de imagens, vídeos e textos, armazenando tudo em uma linha do tempo interativa.'
            tecnology={['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma']}
            descTec={['Uma biblioteca JavaScript de código aberto.', 'Adiciona tipagem estática ao JavaScript.', 'Um framework React que facilita a construção de aplicativos web do lado do servidor.', 'Um framework CSS que oferece uma abordagem de desenvolvimento baseada em componentes', 'Fornece uma interface simplificada para interagir com o banco de dados.' ]}
          />

      </Styled.Content>
    </Styled.Container>
  )
}