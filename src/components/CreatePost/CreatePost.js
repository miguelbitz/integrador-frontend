import React from 'react'
import { FormPost, Input, TextArea } from './CreatePostStyled'
import useForms from '../../hooks/useForms'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import useProtectedPage from '../../hooks/useProtectedPage'


export default function CriarPost() {
  useProtectedPage()

  const token = localStorage.getItem("token")

  const headers = {
    headers:{
      Authorization:token 
    }
  }
  
  //1. Criar o post com o use form, passando como parametro useForms({title:"",body:""})
  const {form, onChange, limparCampos } = useForms({title:"",body:""})
 
  const enviarPost = (e) => {
    e.preventDefault()
    console.log("entrou")
    console.log(form)
    // Endereco `${BASE_URL}/posts` / Os dados que queremos inserir => form
    // headers => quem vai ser a pessoa que pode colocar no banco de dados => token
    axios.post(`${BASE_URL}/posts`,form,headers)
    .then((res)=>{
      console.log('Entrou no then')
      console.log(res.data)
      limparCampos()
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err)
    })
    

  }

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input placeholder='digite um título para o seu post'
        value = {form.title}
        name = "title"
        onChange ={onChange}
      />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea placeholder='crie um post!' 
        value={form.body}
        name='body'
        onChange={onChange}
      />
      <button>Enviar</button>
    </FormPost>
  )
}
