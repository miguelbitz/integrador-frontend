import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios
import { BASE_URL } from '../../constants/BASE_URL';  // Import BASE_URL
import { goToPost } from '../../routes/coordinator';
import { Card, Comments, CommentsAmount, Content, Img, ImgComment, ImgLike, Interaction, Likes, LikesAmount, Title } from './CardPostStyled';
import like from '../../assets/up.png';
import dislike from '../../assets/down.png';
import comment from '../../assets/comments.png';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function CardPost({ post }) {
    const navigate = useNavigate();
    const { likePost, dislikePost } = useContext(GlobalContext);
    const [postComments, setPostComments] = useState([]);  // Local state for comments

    useEffect(() => {
        const token = localStorage.getItem('token');  // Get token
        const headers = {
            headers: {
                Authorization: token
            }
        };

        axios.get(`${BASE_URL}/comments?postId=${post.id}`, headers)
            .then((res) => {
                setPostComments(res.data);
            })
            .catch((err) => {
                console.error("Erro ao buscar comentários:", err);
            });
    }, [post.id, postComments]);

    const handleLike = () => {
        likePost(post.id);
    };

    const handleDislike = () => {
        dislikePost(post.id);
    };

    const qntLikes = post.likes - post.dislikes;

    return (
        <Card onClick={() => { goToPost(navigate, post.id) }}>
            <Title>Enviado por: {post.creator.nickname}</Title>
            <Content>{post.content}</Content>
            <Interaction>
                <Likes>
                    <ImgLike src={like} alt="like" onClick={handleLike} />
                    <LikesAmount>{qntLikes}</LikesAmount>
                    <ImgLike src={dislike} alt="dislike" onClick={handleDislike} />
                </Likes>
                <Comments>
                    <ImgComment src={comment} alt="comment" />
                    <CommentsAmount>{postComments.length}</CommentsAmount>  {/* Display the number of comments */}
                </Comments>
            </Interaction>
        </Card>
    );
}
