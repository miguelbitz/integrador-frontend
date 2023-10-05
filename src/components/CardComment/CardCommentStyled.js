import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    border: none;
    background-color: #EDEDED;
    border-radius: 12px;
    margin: 3px;
    padding: 8px 16px;
    gap: 1rem;
    width: 90%;
`

export const Interaction = styled.div`
    display: flex;
    background-color: transparent;
    justify-content: start;
    align-items: center;
    gap: 1rem;
`

export const Likes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    gap: .7rem;
    border: 1px solid #ECECEC;
    padding: 5px;
    border-radius: 28px;
`

export const Content = styled.p`
    background-color: transparent;
    color: black;
    font-size: 14px;
    font-weight: 500;
    line-height: 1rem;
`

export const Title = styled.p`
    background-color: transparent;
    color: #6F6F6F;
    font-size: 10px;
    font-weight: 400;
    line-height: 1rem;
`

export const ImgLike = styled.img`
    background-color: transparent;
    height: .9rem;
    :hover{
        cursor: pointer;
    }
`

export const LikesAmount = styled.p`
    font-size: 9px;
    font-weight: 700;
    background-color: transparent;
    color: #6F6F6F;
`