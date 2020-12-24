import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Follow = styled.div`
    display: flex;
    width:  100%;
    flex-direction: row;
    justify-content: center;
    background-color:  var(--blue-light);
`
export const Context = styled.div`
    display: flex;
    width: min(1170px, 100%);
    @media(max-width: 1200px){
        width: min(970px, 100%);
    }
    @media(max-width: 990px){
        width: min(720px, 100%);
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
    }
    @media(max-width: 768px){
        width: 100%;
    }
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 80px;
`
export const InfoFollow = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 990px){
        align-items: center;
        text-align: center;
        width: 100%;
        padding-right: 0;
    }
    width: 540px;
    text-align: left;
    padding-right: 56px;
>div{
        color: var(--primary);
    }
`
export const LabelFl = styled.div`
    @media(max-width: 990px){
        display: none;
    }
    display: flex;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 32px;
`
export const TitleFl = styled.div`
    @media(max-width: 990px){
        margin-top: 8px;
    }
    font-size: 64px !important;
    line-height: 64px !important;
    font-weight: bold;
    @media(max-width: 768px){
        margin-top: 18px;
        font-size: 30px !important;
        line-height: 30px !important;
    }
`
export const SubTitleFl = styled.div`
    font-size: 18px;
    font-weight: 500;
    width: auto;
    @media(max-width: 768px){
        font-size: 14px;
    }
    margin: 16px 0;
    max-width: 100%;
`
export const ButtonFl = styled.button`
    padding: 17px 48px;
    margin: 16px 0;
    background : var(--primary);
    color: #fff;
    border-radius: 500px;
    font-weight: bold;
    @media(max-width: 768px){
        width: 97%;
    }
`
export const DescriptionFl = styled.div`
    font-size: 13px;
    line-height: 16px;
    margin: 16px 0;
    @media(max-width: 768px){
        margin: 5px 0;
    }
`
export const ImageFollow = styled.div`
    padding-top: 40px;
    padding-left: 40px;
    @media(max-width: 990px){
        padding-top: 25px;
    }
    background: url("https://campaigns.scdn.co/images/holiday-2020-second-wave.jpg") no-repeat;
    background-size: contain;
    background-origin: content-box;
`;
export const ImageInfo = styled.div`
    
    width: 420px;
    height: 420px;
    margin-left: auto;
    @media(max-width: 1200px){
        width: 390px;
        height: 390px;
    }
    @media(max-width: 768px){
        width: 132px;
        height: 132px;
    }
`
export const LabelFlXM = styled.div`
    display: none;
    @media(max-width: 990px){
        display: inline;
    }
    color: var(--primary);
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
    padding-left: 40px;
    padding-top: 40px;
`;
