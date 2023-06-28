import React from 'react';
import { Card } from '../../../components/Card';

import imgCard4 from '../../../image/projetoEcommerce.png';
import figma from '../../../image/logos/figma.svg';

export function ProjetoEcommerce() {
  return (
    <Card
      imageCard={imgCard4}
      imageLogo={[figma]}
      color="yellow"
      titulo="UI de E-commerce"
      redeSocial="Behance"
      link="https://www.behance.net/gallery/155567841/E-commerce-para-Produtos-de-Limpeza"
      desc="O projeto foi desenvolvido no Figma e tem como objetivo criar uma experiência de compra agradável e intuitiva para os usuários. O design completo inclui páginas para todo o fluxo de um e-commerce, além de páginas de apresentação da empresa e informações de redes sociais."
      tecnology={['Figma']}
      descTec={['Ferramenta de design de interface.']}
      design={true}
      descDesign="Páginas de Produto | Detalhes do Produto | Carrinho de Compras | Páginas de Checkout | Páginas Institucionais | Blog | Contatos"
    />
  );
}
