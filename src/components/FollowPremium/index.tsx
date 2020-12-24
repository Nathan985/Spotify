import React from 'react';

import { 
    Container,
    Follow,
    Context,
    InfoFollow,
    LabelFl,
    TitleFl,
    SubTitleFl,
    ButtonFl,
    DescriptionFl,
    ImageFollow,
    ImageInfo,
    LabelFlXM
  } from './styles';

const FollowPremium: React.FC = () => {
  return (
    <Container>
        <Follow>
            <Context>
              <InfoFollow>
                <LabelFl>SPOTIFY PREMIUM</LabelFl>
                <TitleFl>Tá acabando: 3 meses de Premium grátis</TitleFl>
                <SubTitleFl>Não perca a chance de ouvir sua música sem anúncios, no modo offline e muito mais. Cancele quando quiser.</SubTitleFl>
                <ButtonFl>GANHE 3 MESES GRÁTIS</ButtonFl>
                <DescriptionFl>Somente para o plano Individual. Depois, apenas R$ 16,90/mês. Oferta indisponível para usuários que já experimentaram o Premium. Sujeita a Termos e Condições. A oferta termina em 31 de dez de 2020.</DescriptionFl>
              </InfoFollow>
              <ImageFollow>
                <ImageInfo />
              </ImageFollow>
              <LabelFlXM>SPOTIFY PREMIUM</LabelFlXM>
            </Context>
          </Follow>
    </Container>
  );
}

export default FollowPremium;