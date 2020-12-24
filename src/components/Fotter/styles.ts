import styled, {css} from 'styled-components';
import { Spotify, Instagram, Facebook, Twitter } from '../../styles/icons';
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color:  var(--dark);
  align-items: center;
`;

export const Context = styled.div`
    display: flex;
    flex-direction: column;
    width: min(1170px, 100%);
    @media(max-width: 1200px){
        width: min(970px, 100%);
    }
    @media(max-width: 990px){
        width: min(725px, 100%);
    }
    padding-top: 80px;
    padding-bottom: 80px;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 990px){
        flex-direction: column;
        justify-content: flex-start;
    }
    >div{
        display: flex;
        @media(max-width: 768px){
            flex-direction:  column;
            justify-content: flex-start;
        }
    }
    >div + div{
        display: flex;
        justify-content: space-between;
        @media(max-width: 990px){
            margin-top: 64px;
            justify-content: flex-start;
        }
        @media(max-width: 768px){
            margin-top: 164px;
            flex-direction: row;
        }
        svg{
            cursor: pointer;
            margin-left: 10px;
            margin-right: 10px;
            &:hover{
                fill: var(--secondary);
            }
        }
    }
`;

export const SpotfyLogo = styled.div`
    display: flex;
    flex-direction: row;
    >div{
        display: flex;
        align-items: center;
        height: 80px;
        >span{
            font-size: 25px;
            font-weight: bold;
        }
        @media(max-width: 992px){
            >span{
                font-size: 17px;
                font-weight: bold;
            }
        }
    }
    
`;

export const SpotfyIcon = styled(Spotify)`
    width: 48px;
    height: 48px;
    @media(max-width: 992px){
        width: 32px;
        height: 32px;
    }
`;

const SessionsCss = css`
    margin-left: 80px;
    >strong{
        color: var(--gray);
        margin-bottom: 32px;
        font-size: 14px;
        font-weight: bold;
    }
    >p{
        margin-top: 28px;
        font-size: 14px;
        cursor: pointer;
        &:hover{
            color:  var(--secondary);
        }
        @media(max-width: 768px){
            margin-top: 22px;
        }
    }
    @media(max-width: 768px){
        margin: 0;
        margin-top: 42px;
    }
`;

export const InfoPage = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
    >span{
        color: var(--gray);
        font-size: 12px;
        cursor: pointer;
        margin: 10px;
        &:hover{
            color: var(--secondary);
        }
        @media(max-width: 768px){
            font-size: 10px;
            width: 100%;
        }
    }
`;

export const Company = styled.div`${SessionsCss}`;

export const Community = styled.div`${SessionsCss}`;

export const Useful = styled.div`${SessionsCss}`;

const IconCss = css`
    padding: 10px;
    border-radius: 50%;
    width: 54px;
    height: 54px;
    @media(max-width: 990px){
        width: 42px;
        height: 42px;
    }
    background-color: #222326;
    font-weight: bold;
`

export const InstagramIcon = styled(Instagram)`${IconCss}`;

export const TwitterIcon = styled(Twitter)`${IconCss}`;

export const FacebookIcon = styled(Facebook)`${IconCss}`;
