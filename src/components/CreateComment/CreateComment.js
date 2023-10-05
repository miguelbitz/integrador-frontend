import React, { useContext } from 'react';
import { ButtonColor, FormPost, Input, TextArea } from './CreateCommentStyled';
import useForms from '../../hooks/useForms';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalContext } from "../../contexts/GlobalContext";

export default function CreateComment({ postId }) {
  useProtectedPage();

  const { token, setReloadPosts } = useContext(GlobalContext);

  const headers = {
    headers:{
      Authorization: token
    }
  };

  const { form, onChange, cleanInput } = useForms({ content: "" });

  const sendComment = (e) => {
    e.preventDefault();

    axios.post(`${BASE_URL}/comments?postId=${postId}`, form, headers) 
      .then((res) => {
        cleanInput();
        setReloadPosts(prevState => !prevState);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <FormPost onSubmit={sendComment}>
      <TextArea
        placeholder='Adicionar comentário'
        value={form.content}
        name='content'
        onChange={onChange}
      />
      <ButtonColor>Responder</ButtonColor>
    </FormPost>
  );
}
