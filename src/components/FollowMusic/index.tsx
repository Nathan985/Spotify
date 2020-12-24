import React from 'react';

import { 
    Container,
    Context,
    Info,
    Button,
    CardsMusic,
    CardOne,
    CardTwo,
    CardThere,
    CardFor,
    CardFive,
    CardSix
} from './styles';

const FollowMusic: React.FC = () => {
  return (
    <Container>
        <Context>
            <Info>
                <h1>É música que você quer?</h1>
                <p>Continue curtindo suas favoritas de onde parou.</p>
                <Button>ABRIR O WEB PLAYER</Button>
            </Info>
            <CardsMusic>
                <div>
                    <CardOne>
                        <img src="https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat_LARGE-en.jpg" />  
                        <div>
                            <h1>On Repeat</h1>
                            <span>ESCUTE AGORA</span>
                        </div>  
                    </CardOne>
                    <CardOne>
                        <img src="https://i.scdn.co/image/ab67616d0000b273bcc5a14301eee72a1c4cbf22" />  
                        <div>
                            <h1>A Música Mais Triste do Ano</h1>
                            <span>ESCUTE AGORA</span>
                        </div>  
                    </CardOne>
                    <CardOne>
                        <img src="https://i.scdn.co/image/ab67616d0000b2734c08b4966393d410eaf75a69" />  
                        <div>
                            <h1>Você Vai Entender</h1>
                            <span>ESCUTE AGORA</span>
                        </div>  
                    </CardOne>
                </div>
                <div>
                    <CardOne>
                        <img src="https://i.scdn.co/image/ab67616d0000b273b52bdb25129e2966c148490b" />  
                        <div>
                            <h1>Melhor Sorriso</h1>
                            <span>ESCUTE AGORA</span>
                        </div>  
                    </CardOne>
                    <CardOne>
                        <img src="https://i.scdn.co/image/ab67616d0000b273a21a30e9850057345cce3182" />  
                        <div>
                            <h1>Silly Girl</h1>
                            <span>ESCUTE AGORA</span>
                        </div>  
                    </CardOne>
                    <CardOne>
                        <img src="https://i.scdn.co/image/ab67616d0000b273cf9c04663c59fefe75eb7a75" />  
                        <div>
                            <h1>The Story of O.J. (Top Version)</h1>
                            <span>ESCUTE AGORA</span>
                        </div>  
                    </CardOne>
                </div>
            </CardsMusic>
        </Context>
    </Container>
  );
}

export default FollowMusic;