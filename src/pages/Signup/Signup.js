import React from 'react'
import useForms from '../../hooks/useForms'
import { ButtonColor, ContainerForm, ContainerSignup, Div, Input, DivCheckbox, Paragraph, Span, DivSignup, Title, DivTitle } from './SignupStyled'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

export default function Signup() {
    const { form, onChange, cleanInput } = useForms({ nickname: "", email: "", password: "" })

    const userData = {
        nickname: form.nickname,
        email: form.email,
        password: form.password
    }

    const sendSignup = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/users/signup`, userData)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                cleanInput()
            })
            .catch((error) => {
                console.log("resposta do erro", error.response)
            })
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={sendSignup}>
                <DivTitle>
                    <Title>Olá, boas vindas ao LabEddit ;)</Title>
                </DivTitle>
                <Div>
                    <Input
                        id='nickname'
                        name='nickname'
                        pattern='[a-zA-Z\u00C0-\u00FF ]{3,}'
                        title='Nome de usuário deve ter no mínimo 3 caracteres. Podendo conter letras, acentos e espaço'
                        value={form.nickname}
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
                        minLength={1}
                        value={form.password}
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
                    <ButtonColor>Cadastrar</ButtonColor>
                </DivSignup>

            </ContainerForm>
        </ContainerSignup>
    )
}
