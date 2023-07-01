import imgCard1 from '../image/projetoCapsula.png';
import ts from '../image/logos/ts.svg';
import next from '../image/logos/next.svg';
import tw from '../image/logos/tw.svg';
import prisma from '../image/logos/prisma.svg';
import react from '../image/logos/react.svg';
import imgCard2 from '../image/projetoPomodoro.png';
import sc from '../image/logos/sc.svg';

import imgCard4 from '../image/projetoEcommerce.png';
import figma from '../image/logos/figma.svg';

export interface CardProps {
  id: string;
  imageCard: string;
  imageLogo: string[];
  titulo: string;
  redeSocial: string;
  desc: string;
  tecnology: string[];
  descTec: string[];
  link: string;
  color: 'blue' | 'green' | 'yellow' | 'pink' | 'orange';
  design?: boolean;
  descDesign?: string;
}

export const projetosDev: CardProps[] = [
  {   
    id: '01',
    imageCard:imgCard2,
    imageLogo:[react, ts, sc],
    color:"pink",
    titulo:"Cronômetro - RocketSeat",
    redeSocial:"GitHub",
    link:"https://github.com/caroldelira/cronometroRocket",
    desc:"O projeto vem com página de acompanhamento de tarefas e foi desenvolvido como parte do curso da RocketSeat. Trata-se de uma aplicação que permite cronometrar o tempo necessário para concluir uma atividade e oferece uma página para acompanhar as tarefas realizadas.",
      tecnology:['React', 'TypeScript', 'Styled-Components'],
      descTec:[
        'A estrutura de desenvolvimento front-end que permite a criação de interfaces interativas e reativas.',
        'Uma linguagem de programação que adiciona tipagem estática ao JavaScript, fornecendo uma melhor verificação de erros e autocompletar.',
        'Uma biblioteca para estilização de componentes utilizando CSS-in-JS, proporcionando uma abordagem mais modular e fácil de manter.',
      ],
  },
  {  
    id: '02',
    color: "green",
    imageCard:imgCard1,
    imageLogo:[react, ts, next, tw, prisma],
    titulo:"Spacetime - RocketSeat",
    redeSocial:"GitHub",
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
  },
    {  
    id: '03',
    imageCard:imgCard4,
    imageLogo:[figma],
    color:"yellow",
    titulo:"UI de E-commerce",
    redeSocial:"Behance",
    link:"https://www.behance.net/gallery/155567841/E-commerce-para-Produtos-de-Limpeza",
    desc:"O projeto foi desenvolvido no Figma e tem como objetivo criar uma experiência de compra agradável e intuitiva para os usuários. O design completo inclui páginas para todo o fluxo de um e-commerce, além de páginas de apresentação da empresa e informações de redes sociais.",
    tecnology:['Figma'],
    descTec:['Ferramenta de design de interface.'],
    design:true,
    descDesign:"Páginas de Produto | Detalhes do Produto | Carrinho de Compras | Páginas de Checkout | Páginas Institucionais | Blog | Contatos",
  }
]