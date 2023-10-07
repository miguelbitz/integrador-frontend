import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useForms from '../../hooks/useForms'
import useProtectedPage from '../../hooks/useProtectedPage'
import axios from 'axios'
import { ContainerForm, ContainerLogin, Input, Div, ImgHome, Paragraph, Button, Line, DivButtons, ButtonColor } from './LoginStyled'
import { goToSignUp, goToFeed } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/BASE_URL'
import logoHome from '../../assets/logoHome.png'
import line from '../../assets/line.png'
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Login() {
  const navigate = useNavigate()
  useProtectedPage()

  const { isLoading, setIsLoading } = useContext(GlobalContext);

  const { form, onChange } = useForms({ email: "", password: "" })

  const sendLogin = (e) => {
    e.preventDefault()
    setIsLoading(true);

    axios.post(`${BASE_URL}/users/login`, form)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        goToFeed(navigate)
      })
      .catch((error) => {
        console.log("resposta do erro", error.response)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <ContainerLogin>
      {isLoading ? (
        <div class="container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      ) : (
        <ContainerForm onSubmit={sendLogin}>
          <Div>
            <ImgHome src={logoHome} alt="logo" />
            <Paragraph>O projeto de rede social da Labenu</Paragraph>
          </Div>
          <Div>
            <Input
              id='email'
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
              required
            />
            <Input
              id='password'
              name="password"
              type="password"
              minLength={1}
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
              required
            />
          </Div>
          <DivButtons>
            <ButtonColor>Continuar</ButtonColor>
            <Line src={line} alt="line" />
            <Button onClick={() => goToSignUp(navigate)}>Crie uma conta!</Button>
          </DivButtons>
        </ContainerForm>
      )}
    </ContainerLogin>
  )
}
