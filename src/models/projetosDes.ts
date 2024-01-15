import imgCard3 from '../image/projetoOrganizi.png';
import imgCard4 from '../image/projetoEcommerce.png';
import figma from '../image/logos/figma.svg';

import { CardProps } from '../components/Card/Card';


export const projetosDes: CardProps[] = [
  {   
    id: '01',
    imageCard:imgCard3,
    imageLogo:[figma],
    color:"blue",
    titulo:"UX/UI de App Organizi",
    link:"/projetoOrganizi",
    desc:"Projeto desenvolvido durante uma mentoria UX, focado em criar uma solução abrangente para rotinas financeiras básicas e controle de compras. O produto resultante envolveu uma extensa pesquisa de UX, testes de usabilidade, criação de matriz CSD (Contexto, Solução, Dificuldade), mapeamento de jornadas do usuário e arquitetura da informação. Além disso, foram criados protótipos de baixa, média e alta fidelidade, culminando em um protótipo funcional.",
    tecnology:['Figma'],
    descTec: ['Ferramenta de design de interface.'],
    buttonLink: true,
  },
  {  
    id: '02',
    imageCard:imgCard4,
    imageLogo:[figma],
    color:"yellow",
    titulo:"UI de E-commerce",
    link:"/projetoProlimpa",
    desc:"O projeto foi desenvolvido no Figma e tem como objetivo criar uma experiência de compra agradável e intuitiva para os usuários. O design completo inclui páginas para todo o fluxo de um e-commerce, além de páginas de apresentação da empresa e informações de redes sociais.",
    tecnology:['Figma'],
    descTec:['Ferramenta de design de interface.'],
    design:true,
    descDesign: "Páginas de Produto | Detalhes do Produto | Carrinho de Compras | Páginas de Checkout | Páginas Institucionais | Blog | Contatos",
    buttonLink: true,
  }
]