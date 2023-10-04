import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background-color: #EDEDED;
    justify-content: space-between;
`

export const DivImg = styled.div`
    display: flex;

`

export const Title = styled.p`
    color: #4088CB;
    background-color: transparent;
    font-weight: 600;
    grid-column: 3/4;
    text-decoration: none;
    :hover{
        cursor:pointer;
    }
    :a{
        text-decoration: none;
    }
`

export const Img = styled.img`
    height: 28px;
    grid-column: 2/3;
    background-color: transparent;
`