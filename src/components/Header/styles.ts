import styled, {css} from 'styled-components';
import { Spotify, ChevronDown, ChevronUp, ThreeBars } from '../../styles/icons';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 2;
    height: 80px;
    background-color: var(--dark);
    width: 100%;
    @media(max-width: 992px){
        height: 54px;
        position:  fixed;
    }
`;

export const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
    background-color: var(--header);
    position: fixed;
    @media(max-width: 992px){
        height: 54px;
    }
`;

export const Context = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    width: min(1170px, 100%);
    @media(max-width: 1200px){
        width: min(970px, 100%);
    }

    @media(max-width: 992px){
        width: min(725px, 100%);
        height: 54px;
        padding: 0 10px;
    }
`;

export const PageInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    
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
`;

export const Spotfy = styled(Spotify)`

    width: 48px;
    height: 48px;
    @media(max-width: 992px){
        width: 32px;
        height: 32px;
    }
`;

export const ProfileData = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    >input{
        outline: 0;
    }
    >a{
        margin-right: 38px;
        color: var(--white);
        font-weight: bold;
        text-decoration: none;
        &:hover{
            color: var(--secondary);
        }
    }
    @media(max-width: 992px){
        >a {
            display: none;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    >span, svg{
        font-weight:bold;
    }
    >span{
        @media(max-width: 992px){
            display: none;
        }
    }
    >svg:nth-child(2n){
        display:none;
    }
    &:hover{
        >span{
            color: var(--secondary);
        }
        >svg{
            fill: var(--secondary);
        }
    }
    &:active{
        >span{
            color: var(--secondary);
        }
        >svg:nth-child(1n){
            display: none;
            fill: var(--secondary);
        }
        >svg:nth-child(2n){
            display:inline;
        }
    }

`;

export const Bar = styled.div`

    background-color: var(--white);
    width: 1px;
    height: 18px;
    @media(max-width: 992px){
        display: none;
    }
`;

export const ProfileImg = styled.img`

    background-color: var(--white);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: 28px;
    margin-right: 12px;
    cursor: pointer;
    @media(max-width: 992px){
        width: 34px;
        height: 34px;
    }
`;

const Iconcss  = css`

    width: 22px;
    height: 22px;
    @media(max-width: 992px){
        display: none;
    }
`

export const ArrowUp = styled(ChevronUp)`
    ${Iconcss}
    /* display: none; */
`
export const ArrowDown = styled(ChevronDown)`${Iconcss}`

export const BarsIcon = styled(ThreeBars)`
    
    display: none;
    width: 28px;
    height: 28px;

    @media(max-width: 992px){
        display: inline;
    }

`

export const Button = styled.button`
    @media(max-width: 992px){
        display: none;
    }
    font-size: 15px;
    font-weight: bold;
    padding: 0 0 0 0;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover, &:active{
        color: var(--secondary);
        >svg{
            fill: var(--secondary);
        }
    }

`