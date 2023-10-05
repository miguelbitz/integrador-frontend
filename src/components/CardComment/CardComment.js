import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { Card, ImgLike, Interaction, Likes, LikesAmount, Title, Content } from './CardCommentStyled';
import like from '../../assets/up.png';
import dislike from '../../assets/down.png';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function CardComment({ comment }) {
    const { likeComment, dislikeComment } = useContext(GlobalContext);

    const handleLike = () => {
        likeComment(comment.id);
    };

    const handleDislike = () => {
        dislikeComment(comment.id);
    };

    const qntLikes = comment.likes - comment.dislikes;

    return (
        <Card>
            <Title>Enviado por: {comment.user.nickname}</Title>
            <Content>{comment.content}</Content>
            <Interaction>
                <Likes>
                    <ImgLike src={like} alt="like" onClick={handleLike} />
                    <LikesAmount>{qntLikes}</LikesAmount>
                    <ImgLike src={dislike} alt="dislike" onClick={handleDislike} />
                </Likes>
            </Interaction>
        </Card>
    );
}
