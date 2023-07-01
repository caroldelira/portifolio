import imgCard3 from '../image/projetoOrganizi.png';
import imgCard4 from '../image/projetoEcommerce.png';
import figma from '../image/logos/figma.svg';

interface CardProps {
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

export const projetosDes: CardProps[] = [
  {   
    id: '01',
    imageCard:imgCard3,
    imageLogo:[figma],
    color:"blue",
    titulo:"UX/UI de App Organizi",
    redeSocial:"Behance",
    link:"https://www.behance.net/gallery/141518937/Projeto-Organizi",
    desc:"Projeto desenvolvido durante uma mentoria UX, focado em criar uma solução abrangente para rotinas financeiras básicas e controle de compras. O produto resultante envolveu uma extensa pesquisa de UX, testes de usabilidade, criação de matriz CSD (Contexto, Solução, Dificuldade), mapeamento de jornadas do usuário e arquitetura da informação. Além disso, foram criados protótipos de baixa, média e alta fidelidade, culminando em um protótipo funcional.",
    tecnology:['Figma'],
    descTec:['Ferramenta de design de interface.'],
  },
  {  
    id: '02',
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