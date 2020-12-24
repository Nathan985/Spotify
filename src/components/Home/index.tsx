import React from 'react';
import Header from '../Header';
import Footer from '../Fotter'
import FollowPremium from '../FollowPremium';
import Retrospective from '../Retrospective';
import FollowMusic from '../FollowMusic'
import { Container } from './styles';

const Home: React.FC = () => {
  return (
      <Container>
          <Header />
          <FollowPremium />
          <Retrospective />
          <FollowMusic />
          <Footer />
      </Container>
  )
}

export default Home;