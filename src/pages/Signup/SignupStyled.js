import styled from "styled-components";

export const ContainerSignup = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    min-width: fit-content;
    width: 100vw;
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

export const ButtonColor = styled.button`
    height: 2.5rem;
    width: 90%;
    border-radius: 25px;
    border: 1px lightgray solid ;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    color: white;
    :hover{
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(5px);
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

export const DivSignup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
`

export const DivCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 90%;
`

export const Span = styled.span`
    font-weight: 400;
    font-size: 14px;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
`

export const Title = styled.p`
    font-weight: bold;
    font-size: 2rem;
`

export const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 3rem;
`