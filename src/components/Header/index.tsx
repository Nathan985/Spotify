import React, { useState } from 'react';

import { 
    Container, 
    Layout,
    PageInfo,
    Spotfy,
    ProfileData,
    Bar,
    ProfileImg,
    ArrowUp,
    ArrowDown,
    Context,
    Profile,
    BarsIcon,
    Button
} from './styles';

const Header: React.FC = () => {

    const [dropdown, setDorpdown] = useState(false);
    
  return (
      <Container>
        <Layout>
            <Context>
                <PageInfo>
                    <Spotfy />
                    <span>Spotify</span>
                </PageInfo>
                <ProfileData>
                    <a href="http://localhost:3000" >Premium</a>
                    <a href="http://localhost:3000" >Suporte</a>
                    <a href="http://localhost:3000" >Baixar</a>
                    <Bar  />
                    <Profile onClick={ () => {setDorpdown(!dropdown)}} >
                        <ProfileImg src="https://avatars2.githubusercontent.com/u/56900147?s=460&u=01352869a1d243e392d8e063d3c88f7f6afbe2d4&v=4" onClick={ () => {setDorpdown(!dropdown)}} />
                        <Button onClick={ () => {setDorpdown(!dropdown)}} >Perfil
                            {
                                dropdown === true ? <ArrowUp /> : <ArrowDown />
                            }
                        </Button>
                    </Profile>
                    <BarsIcon />
                </ProfileData>
            </Context>
        </Layout>
      </Container>
  );
}

export default Header;