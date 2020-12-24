import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
`;

export const Context = styled.div`

  width: min(1170px, 100%);
  @media(max-width: 1200px){
    width: min(970px, 100%);
  }
  @media(max-width: 990px){
    width: min(720px, 100%);
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media(max-width: 768px){
      width: 100%;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const CardImg = styled.div`
  display: flex;
  >span{
    display: none;
  }
  @media(max-width: 1200px){
      width: min(400px, 100%);
  }
  @media(max-width: 990px){
    flex-direction: column;
    align-items: center;
    >span{
      display: inline;
      margin-bottom: 32px;
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      letter-spacing: 0.1em;
      font-style: normal;
      margin-bottom: 32px;
      text-transform: uppercase;
    }
  }
  @media(max-width: 768px){
      width: min(237px, 100%);
      height: 237px;
  }
`
export const Gradient = styled.div`
  @media(max-width: 1200px){
      width: min(400px, 100%);
  }
  background: linear-gradient(359.37deg, #000 3.09%, #FF4632 22.4%, #FAE62D 46.64%, #9BF0E1 62.15%, #A0C3D2 79.91%, #4100F5 99.49%);
  background-repeat: no-repeat;
  background-size: 100% 324px;
  background-position: 0px 40px;
  box-sizing: border-box;
  height: 404px;
  width: 496px;
  position: relative;
  padding: 0 30px;
  @media(max-width: 990px){
    height: 399px;
    width: min(324px, 100%);
  }
  @media(max-width: 768px){
      width: 243px;
      height: 170px;
      max-width: 1400px;
  }
`
export const Banner = styled.div`
  display: flex;
  /* top: -49px; */
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--blue-light);
  justify-content: flex-end;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-align: center;
  -webkit-box-orient: horizontal;
  p{
    font-size: 36px;
    color: var(--primary);
    font-weight: bold;
  }
  @media(max-width: 990px){
    p{
      font-size: 32px;
    }
  }
  > div{
    padding: 90px;
  }
  @media(max-width: 768px){
      width: auto;
      height: 204px;
      p{
        font-size: 14px;
        font-weight: bold;
      }
  }
`
export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 555px;
  @media(max-width: 1200px){
      width: min(455px, 100%);
  }
  @media(max-width: 990px){
        align-items: center;
        text-align: center;
        >p{
          display: none;
        }
        >h1{
          margin-top: 15px;
        }
    }
  >p{
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      letter-spacing: 0.1em;
      font-style: normal;
      margin-bottom: 32px;
      text-transform: uppercase;
    }
  >h1{
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 32px;
  }
  >span{
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: initial;
    margin-bottom: 32px;
  }
  @media(max-width: 768px){
      width: 97%;
  }
  @media(max-width: 768px){
      width: min(237px, 100%);
      height: 237px;
      >h1{
        margin-top: 32px;
        font-size: 36px;
        line-height: 36px;
      }
      span{
        font-size: 12px;
        line-height: 16px;
      }
  }
`
export const Button = styled.button`

  color: var(--primary);
  background-color:  var(--white);
  width: 370px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  transition-duration: .1s;
  border-width: 0;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  &:hover{
    -webkit-transform: scale(1.04);
    -ms-transform: scale(1.04);
    transform: scale(1.04);
  }
  @media(max-width: 768px){
      width: 97vw;

  }
`