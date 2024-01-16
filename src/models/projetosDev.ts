import imgCard1 from '../image/projetoCapsula.png';
import imgCard2 from '../image/projetoPomodoro.png';
import imgCard3 from '../image/projetoMario.png';
import imgCard4 from '../image/projetoLPAtelie.png';
import ts from '../image/logos/ts.svg';
import next from '../image/logos/next.svg';
import tw from '../image/logos/tw.svg';
import prisma from '../image/logos/prisma.svg';
import react from '../image/logos/react.svg';
import sc from '../image/logos/sc.svg';
import html from '../image/logos/html.svg';
import css from '../image/logos/css.svg';
import js from '../image/logos/js.svg';

import { CardProps } from '../components/Card/Card';


export const projetosDev: CardProps[] = [
  {  
    id: '01',
    color: "green",
    imageCard:imgCard1,
    imageLogo:[react, ts, next, tw, prisma],
    titulo:"Spacetime - RocketSeat",
    link:"https://github.com/caroldelira/nlwspacetime",
    desc:"O projeto Spacetime foi desenvolvido durante o evento NLW da RocketSeat. Trata-se de um diário de bordo completo, que permite aos usuários registrar suas experiências por meio de imagens, vídeos e textos, armazenando tudo em uma linha do tempo interativa.",
    tecnology:['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma'],
    descTec:[
      'Uma biblioteca JavaScript de código aberto.',
      'Adiciona tipagem estática ao JavaScript.',
      'Um framework React que facilita a construção de aplicativos web do lado do servidor.',
      'Um framework CSS que oferece uma abordagem de desenvolvimento baseada em componentes',
      'Fornece uma interface simplificada para interagir com o banco de dados.',
    ],
    buttonLink: true,
  },
  {  
    id: '02',
    imageCard:imgCard2,
    imageLogo:[react, ts, sc],
    color:"pink",
    titulo:"Cronômetro - RocketSeat",
    link:"https://cronometrorocket.netlify.app/",
    desc:"O projeto vem com página de acompanhamento de tarefas e foi desenvolvido como parte do curso da RocketSeat. Trata-se de uma aplicação que permite cronometrar o tempo necessário para concluir uma atividade e oferece uma página para acompanhar as tarefas realizadas.",
    tecnology:['React', 'TypeScript', 'Styled-Components'],
    descTec:[
      'A estrutura de desenvolvimento front-end que permite a criação de interfaces interativas e reativas.',
      'Uma linguagem de programação que adiciona tipagem estática ao JavaScript, fornecendo uma melhor verificação de erros e autocompletar.',
      'Uma biblioteca para estilização de componentes utilizando CSS-in-JS, proporcionando uma abordagem mais modular e fácil de manter.',
    ],
    buttonLink: true,
  },
    {  
    id: '03',
    imageCard:imgCard3,
    imageLogo:[html, css, js],
    color:"blue",
    titulo:"SuperMario - SPCLover",
    link:"https://supermariospclover.netlify.app/",
    desc:"Projeto desenvolvido como demonstração das habilidades adquiridas ao longo do meu tempo de trabalho no SPC Brasil. O objetivo era criar um jogo divertido, utilizando as tecnologias básicas de programação web, como HTML, CSS e JavaScript, e incorporando a Identidade Visual da empresa. Para jogar use 'W' para pular e 'S' para baixar, cuidado com os obstáculos e boa diversão!!!",
    tecnology:['HTML', 'CSS', 'JavaScript'],
    descTec: [
      'A linguagem de marcação que estrutura e organiza o conteúdo da página',
      'A linguagem de estilo que permite a estilização e o layout da página.',
      'A linguagem de programação que adiciona interatividade e lógica ao jogo.',
    ],
    buttonLink: true,
  },
    {  
    id: '04',
    imageCard:imgCard4,
    imageLogo:[html, css],
    color:"orange",
    titulo:"Landing Page - Responsiva",
    link:"https://mariagouveaatelie.netlify.app/",
    desc:"Projeto da Faculdade Senac para desenvolver uma LP responsiva com HTML e CSS. com foco na divulgação dos serviços de uma trabalhadora autônoma. Essa proposta visa criar uma presença online eficiente e atraente para promover o trabalho dessa profissional de forma profissional e impactante.",
    tecnology:['HTML', 'CSS'],
      descTec: [
        'A linguagem de marcação que estrutura e organiza o conteúdo da página',
        'A linguagem de estilo que permite a estilização e o layout da página.',
      ],
    buttonLink: true,
  }
]