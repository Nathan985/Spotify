import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;

export const Context = styled.div`
    display: flex;
    width: min(1170px, 100%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 80px;
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    >h1, p{
        color: var(--dark);
    }

    >h1{
        font-size: 48px;
        margin-top: 24px;
        margin-bottom: 12px;
        font-weight: 900;
        letter-spacing: -0.02em;
        line-height: 1.2;
    }
    >p{
        font-size: 18px;
        font-weight: 500;
        margin: .5em 0 1em;
        margin-bottom: 24px;
    }
`

export const Button = styled.button`

    border: 2px solid var(--gray);
    background-color: none;
    color: var(--gray);
    border-radius: 500px;
    padding: 16px 48px 18px;
    letter-spacing: 2px;
    min-width: 160px;
    font-size: 14px;
    line-height: 1;
    transition: .3s;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: var(--gray);
        color: var(--white);
    }


`

export const CardsMusic = styled.div`

    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    img{  
        max-width: max(374px, 30%);
        max-height: max(374px, 30%);
        @media(max-width: 1200px){
            max-width: max(306px, 30%);
            max-height: max(306px, 30%);
        }
        @media(max-width: 990px){
            max-width: max(230px, 30%);
            max-height: max(230px, 30%);
        }
        @media(max-width: 768px){
            max-width: max(210px, 30%);
            max-height: max(210px, 30%);
        }
    }
    @media(max-width: 768px){
        >div + div{
            display: none;
        }
    }
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        @media(max-width: 1200px){
            width: 970px;
        }
        @media(max-width: 990px){
            width: 725px;
        }
        @media(max-width: 768px){
            width: 100%;
            >div:last-child{
                display: none;
            }
        }
        
    }
    @media(max-width: 1200px){
        width: 970px;
    }
    @media(max-width: 768px){
        width: 90%;
    }
    
`

export const CardOne = styled.div`
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    visibility: visible;
    margin: 8px;
    opacity: 1;
    >div{
        display: none;
        transition: 2s;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    h1{
        margin-bottom: 16px;
        font-size: 28px;
        font-weight: bolder;
    }
    span{
        font-size: 14px;
        font-weight: bold;
        line-height: 1;
        color: var(--secondary);
    }
    &:hover{
        >div{
            display: flex;
            background: rgba(0, 0, 0, 0.8);
        }
        img{
            background: rgba(0, 0, 0, 0.8);
        }
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 1px 1px 16px -2px rgba(0, 0, 0, 0.3);
    }
`

export const CardTwo = styled.div``

export const CardThere = styled.div``

export const CardFor = styled.div``

export const CardFive = styled.div``

export const CardSix = styled.div``