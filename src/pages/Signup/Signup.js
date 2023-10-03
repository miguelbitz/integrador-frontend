import React from 'react'
import useForms from '../../hooks/useForms'
import { ButtonColor, ContainerForm, ContainerSignup, Div, Input, DivCheckbox, Paragraph, Span, DivSignup } from './SignupStyled'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
import { goToFeed } from '../../routes/coordinator'

export default function Signup() {
    const { form, onChange } = useForms({ email: "", password: "", userNickname: "" })

    const navigate = useNavigate()

    const userData = {
        username: form.userNickname,
        email: form.email,
        password: form.senha
    }

    const enviarCadastro = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/users/signup`, userData)
            .then(response => {
                console.log('resposta ', response.data.token)
                window.localStorage.setItem('token', response.data.token)
                goToFeed(navigate)

            })
            .catch((error) => {
                console.log("resposta do erro", error.response)
            })
        /*         if (form.password === form.confirmPassword) {
                    const userData = {
                        username: form.nomeUsuario,
                        email: form.email,
                        password: form.password
                    }
                    console.log(userData)
                } else {
                    alert("Digite a mesma senha nos campos 'senha' e 'confirmação de senha'")
                } */
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <Div>
                    <Input
                        id='nickname'
                        name='userNickname'
                        pattern='[a-zA-Z\u00C0-\u00FF ]{3,}'
                        title='Nome de usuário deve ter no mínimo 3 caracteres. Podendo conter letras, acentos e espaço'
                        value={form.userNickname}
                        onChange={onChange}
                        placeholder="Apelido"
                        required
                    />
                    <Input
                        id='email'
                        name='email'
                        type={"email"}
                        value={form.email}
                        onChange={onChange}
                        placeholder="E-mail"
                        required
                    />
                    <Input
                        id='password'
                        name='password'
                        type="password"
                        minLength={8}
                        value={form.senha}
                        onChange={onChange}
                        placeholder="Senha"
                        required
                    />
                </Div>
                <DivSignup>
                    <DivCheckbox>
                        <Span>Ao continuar, você concorda com o nosso <Span style={{ color: '#4088CB' }}>Contrato de usuário</Span> e nossa <Span style={{ color: '#4088CB' }}>Política de Privacidade</Span></Span>
                    </DivCheckbox>
                    <DivCheckbox>
                        <input type="checkbox"></input>
                        <Paragraph>Eu concordo em receber email sobre coisas legais no Labeddit</Paragraph>
                    </DivCheckbox>
                </DivSignup>
                <ButtonColor>Cadastrar</ButtonColor>
            </ContainerForm>
        </ContainerSignup>
    )
}
