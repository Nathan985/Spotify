import React from 'react';

import { 
    Container,
    CardImg,
    Gradient,
    Banner,
    InfoCard,
    Button,
    Context
} from './styles';

const Retrospective: React.FC = () => {
  return (
    <Container>
        <Context>
            <CardImg>
                <span>RETROSPECTIVA 2020</span>
                <Gradient>
                    <Banner>
                        <div>
                            <p>Retrospectiva</p>
                            <p>2020</p>
                        </div>
                    </Banner>
                </Gradient>
            </CardImg>
            <InfoCard>
                <p>RETROSPECTIVA 2020</p>
                <h1>Veja o que rolou no seu Spotify</h1>
                <span>
                Descubra os artistas, músicas e podcasts que te ajudaram a sobreviver ao ano mais longo da história.
                </span>
                <Button>CONFIRA SUA RETROSPECTIVA</Button>
            </InfoCard>
        </Context>
    </Container>
  );
}

export default Retrospective;