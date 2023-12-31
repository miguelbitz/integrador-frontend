import React, { useContext } from 'react'
import { ButtonColor, FormPost, Input, TextArea } from './CreatePostStyled'
import useForms from '../../hooks/useForms'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import useProtectedPage from '../../hooks/useProtectedPage'
import { GlobalContext } from "../../contexts/GlobalContext";

export default function CreatePost() {
  useProtectedPage()

  const { token, setReloadPosts } = useContext(GlobalContext);


  const headers = {
    headers:{
      Authorization: token
    }
  }

  const { form, onChange, cleanInput } = useForms({ content: "" })

  const sendPost = (e) => {
    e.preventDefault()

    axios.post(`${BASE_URL}/posts`, form, headers)
      .then((res) => {
        cleanInput()
        setReloadPosts(prevState => !prevState);
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  return (
    <FormPost onSubmit={sendPost}>
      <TextArea
        placeholder='Escreva um post...'
        value={form.content}
        name='content'
        onChange={onChange}
      />
      <ButtonColor>Postar</ButtonColor>
    </FormPost>
  )
}
