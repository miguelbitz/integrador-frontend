import styled from "styled-components";

export const FormPost = styled.form`
    width: fit-content;
    display: flex;
    flex-direction: column ;
    width: 100%;
    gap: .5rem;
`
export const TextArea = styled.textarea`
    height: 6rem;
    margin: 3px;
    border: none;
    background-color: #EDEDED;
    border-radius: 12px;
    padding: .8rem;
`

export const ButtonColor = styled.button`
    height: 2.5rem;
    font-weight: 600;
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