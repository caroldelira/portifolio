import React from 'react';
import { Card } from '../../../components/Card';

import imgCard2 from '../../../image/projetoPomodoro.png';
import ts from '../../../image/logos/ts.svg';
import sc from '../../../image/logos/sc.svg';
import react from '../../../image/logos/react.svg';

export function ProjetoCronometro() {
  return (
    <Card
      imageCard={imgCard2}
      imageLogo={[react, ts, sc]}
      color="pink"
      titulo="Cronômetro - RocketSeat"
      redeSocial="GitHub"
      link="https://github.com/caroldelira/cronometroRocket"
      desc="O projeto vem com página de acompanhamento de tarefas e foi desenvolvido como parte do curso da RocketSeat. Trata-se de uma aplicação que permite cronometrar o tempo necessário para concluir uma atividade e oferece uma página para acompanhar as tarefas realizadas."
      tecnology={['React', 'TypeScript', 'Styled-Components']}
      descTec={[
        'A estrutura de desenvolvimento front-end que permite a criação de interfaces interativas e reativas.',
        'Uma linguagem de programação que adiciona tipagem estática ao JavaScript, fornecendo uma melhor verificação de erros e autocompletar.',
        'Uma biblioteca para estilização de componentes utilizando CSS-in-JS, proporcionando uma abordagem mais modular e fácil de manter.',
      ]}
    />
  );
}
