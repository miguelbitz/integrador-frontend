import { GlobalContext } from './GlobalContext'
import useRequestData from '../hooks/useRequestData'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL';

export const GlobalState = ({ children }) => {

  const token = localStorage.getItem('token')

  const headers = {
    headers: {
      Authorization: token
    }
  }
  const [postsArr, setPostsArr] = useState([])
  const [reloadPosts, setReloadPosts] = useState(false);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get(`${BASE_URL}/posts`, headers)
        .then((res) => {
          setPostsArr(res.data);
        })
        .catch((err) => {
          console.error("Erro ao buscar posts:", err);
        });
    };

    fetchPosts();

  }, [reloadPosts, headers]);

  const posts = [...postsArr].reverse();

  const likePost = (postId) => {
    axios.put(`${BASE_URL}/posts/${postId}/like`, { like: true }, headers)
      .then(() => {
        setReloadPosts(prev => !prev);
      })
      .catch((err) => {
        console.error("Erro ao dar like no post:", err);
      });
  };

  const dislikePost = (postId) => {
    axios.put(`${BASE_URL}/posts/${postId}/like`, { like: false }, headers)
      .then(() => {
        setReloadPosts(prev => !prev);
      })
      .catch((err) => {
        console.error("Erro ao dar dislike no post:", err);
      });
  };

  const likeComment = (commentId) => {
    axios.put(`${BASE_URL}/comments/${commentId}/like`, { like: true }, headers)
      .then(() => {
        setReloadPosts(prev => !prev);
      })
      .catch((err) => {
        console.error("Erro ao dar like no comentario:", err);
      });
  };

  const dislikeComment = (commentId) => {
    axios.put(`${BASE_URL}/comments/${commentId}/like`, { like: false }, headers)
      .then(() => {
        setReloadPosts(prev => !prev);
      })
      .catch((err) => {
        console.error("Erro ao dar dislike no comentario:", err);
      });
  };

  const [isLoading, setIsLoading] = useState(false);


  const context = {
    posts,
    token,
    setReloadPosts,
    likePost,
    likeComment,
    dislikePost,
    dislikeComment,
    setIsLoading,
    isLoading
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );

}