import React from 'react';

import { 
  Container,
  Context,
  Info,
  SpotfyLogo,
  SpotfyIcon,
  Company,
  Community,
  Useful,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  InfoPage
} from './styles';

const Fotter: React.FC = () => {
  return (
    <Container>
      <Context>
        <Info>
          <div>
            <SpotfyLogo>
              <div>
                <SpotfyIcon />
                <span>Spotfy</span>
              </div>
            </SpotfyLogo>
            <Company>
              <strong>EMPRESA</strong>
              <p>Sobre</p>
              <p>Empregos</p>
              <p>For the Record</p>
            </Company>
            <Community>
              <strong>COMUNIDADES</strong>
              <p>Para Artistas</p>
              <p>Desenvolvedores</p>
              <p>Publicidade</p>
              <p>Investidores</p>
              <p>Fornecedores</p>
            </Community>
            <Useful>
              <strong>LINKS ÚTEIS</strong>
              <p>Suporte</p>
              <p>Player da Web</p>
              <p>Aplicativo móvel grátis</p>
              <p>Retrospectiva 2020</p>
            </Useful>
          </div>
          <div>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </Info>
        <InfoPage>
          <span>Legal</span>
          <span>Centro de Privacidade</span>
          <span>Política de privacidade</span>
          <span>Cookies</span>
          <span>Sobre anúncios</span>
        </InfoPage>
      </Context>
    </Container>
  );
}

export default Fotter;