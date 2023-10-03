import styled from "styled-components";

export const ContainerLogin = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    min-width: fit-content;
    max-width: 100vw;
    gap: 2rem;
`

export const Input = styled.input`
    margin-bottom: .3rem;
    height: 2.5rem;
    width: 90%;
    padding: 10px;
    border-radius: 3px;
    border: 1px lightgray solid ;
`

export const Button = styled.button`
    height: 2.5rem;
    width: 100%;
    padding: 10px;
    border-radius: 25px;
    border: 1px #FE7E02 solid ;
    color: #FE7E02;
    :hover{
        opacity: 80%;
        cursor: pointer;
    }
`

export const ButtonColor = styled.button`
    height: 2.5rem;
    width: 100%;
    padding: 10px;
    border-radius: 25px;
    border: 1px lightgray solid ;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    color: white;
    :hover{
        opacity: 80%;
        cursor: pointer;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 100%;
`

export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 90%;
`

export const Paragraph = styled.p`
    font-weight: 300;
    font-size: 14px;
`

export const ImgHome = styled.img`
    width: 8rem;
`

export const Line = styled.img`
    width: 100%;
`

