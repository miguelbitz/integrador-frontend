import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForms from '../../hooks/useForms'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import { ContainerForm, ContainerLogin, Input, Div, ImgHome, Paragraph, Button, Line, DivButtons } from './LoginStyled'
import { goToSignUp, goToFeed } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/BASE_URL'
import logoHome from '../../assets/logoHome.png'
import line from '../../assets/line.png'


export default function Login() {
  const navigate = useNavigate()
  useProtectedPage()

  const { form, onChange } = useForms({ email: "", password: "" })

  const sendLogin = (e) => {
    e.preventDefault()

    axios.post(`${BASE_URL}/users/login`, form)
      .then(response => {
        console.log('resposta do login', response.data.token)
        localStorage.setItem('token', response.data.token)
        goToFeed(navigate)

      })
      .catch((error) => {
        console.log("resposta do erro", error.response)
      })

    console.log(form)
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={sendLogin}>
        <Div>
          <ImgHome src={logoHome} alt="logo" />
          <Paragraph>O projeto de rede social da Labenu</Paragraph>
        </Div>
        <Div>
          <Input id='email'
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="E-mail"
            required
          />
          <Input id='password'
            name="password"
            minLength={8}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
          />
        </Div>
        <DivButtons>
          <Button>Continuar</Button>
          <Line src={line} alt="line" />
          <Button onClick={() => goToSignUp(navigate)}>Crie uma conta!</Button>
        </DivButtons>
      </ContainerForm>
    </ContainerLogin>
  )
}