import styled from "styled-components";

export const FormPost = styled.form`
    width: fit-content;
    display: flex;
    flex-direction: column ;
    gap: .5rem;
`
export const Input = styled.input`
    width: 40vw;
    margin-bottom: 16px;
`
export const TextArea = styled.textarea`
    width: 40vw;
    height: 10vh;
    margin: 3px;
`

export const ButtonColor = styled.button`
    height: 2.5rem;
    border-radius: 10px;
    border: 1px lightgray solid ;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    color: white;
    :hover{
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(5px);
        cursor: pointer;
    }
`