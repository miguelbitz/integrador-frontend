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
    axios.post(`${BASE_URL}/posts/:id/like`, { postId, like: true }, headers)
      .then(() => {
        setReloadPosts(prev => !prev);
      })
      .catch((err) => {
        console.error("Erro ao curtir post:", err);
      });
  };

  const dislikePost = (postId) => {
    axios.post(`${BASE_URL}/posts/:id/like`, { postId, like: false }, headers)
      .then(() => {
        setReloadPosts(prev => !prev);
      })
      .catch((err) => {
        console.error("Erro ao dar dislike no post:", err);
      });
  };

  const context = {
    posts,
    token,
    setReloadPosts,
    likePost,
    dislikePost
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );

}