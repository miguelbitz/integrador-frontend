import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/BASE_URL';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Card, Comments, CommentsAmount, Content, CreateCommentContainer, DetailContainer, ImgComment, ImgLike, Interaction, Likes, LikesAmount, Line, Title } from './PostDetailsStyled';
import like from '../../assets/up.png';
import dislike from '../../assets/down.png';
import comment from '../../assets/comments.png';
import CreateComment from '../../components/CreateComment/CreateComment';
import line from '../../assets/line.png';
import CardComment from '../../components/CardComment/CardComment';

export default function PostDetails() {
  const { likePost, dislikePost } = useContext(GlobalContext);
  const [postComments, setPostComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const { id } = useParams();
  const { posts } = useContext(GlobalContext);

  const post = posts.find(p => p.id === id);

  const comments = [...postComments].reverse();

  useEffect(() => {
    if (!post) return;

    const token = localStorage.getItem('token');
    const headers = {
      headers: {
        Authorization: token
      }
    };

    axios.get(`${BASE_URL}/comments?postId=${post.id}`, headers)
      .then((res) => {
        setPostComments(res.data);
        setIsLoadingComments(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar comentários:", err);
        setIsLoadingComments(false);
      });
  }, [post]);

  if (!post) {
    return (
      <div class="loader"></div>
  );
  }

  const handleLike = () => {
    likePost(post.id);
  };

  const handleDislike = () => {
    dislikePost(post.id);
  };

  const qntLikes = post.likes - post.dislikes;


  return (
    <DetailContainer>
      <Card >
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
            <CommentsAmount>{postComments.length}</CommentsAmount>
          </Comments>
        </Interaction>
      </Card>
      <CreateCommentContainer>
        <CreateComment postId={post.id}/>
      </CreateCommentContainer>
      <Line src={line} alt="line" />
      {isLoadingComments ? (
        <div class="loader"></div>
      ) : (
        comments.map((comment) => {
            return <CardComment key={comment.id} comment={comment} />;
        })
      )}
    </DetailContainer>
  );
}
