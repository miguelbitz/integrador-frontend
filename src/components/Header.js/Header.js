import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { ContainerHeader, Title, Img, DivImg } from './HeaderStyled'
import logoHeader from '../../assets/logoHeader.png'

export default function Header() {
    const location = useLocation()

    const handleRefresh = () => {
        window.location.reload();
    };

    const home = location.pathname === '/'
    const signup = location.pathname === '/signup'
    const feed = location.pathname === '/feed'

    const changePage = () => {
        if (signup) {
            return (
                <ContainerHeader>
                    <Img onClick={() => handleRefresh()} src={logoHeader} alt="logoHeader" />
                    <Link to='/'>
                        <Title>Entrar</Title>
                    </Link>
                </ContainerHeader>
            )
        } else if (home) {
            return (
                <div></div>
            )
        } else if (feed) {
            return (
                <ContainerHeader>
                    <Img onClick={() => handleRefresh()} src={logoHeader} alt="logoHeader" />
                    <Link to='/'>
                        <Title>Logout</Title>
                    </Link>
                </ContainerHeader>
            )
        }
    }

    return (
        changePage()
    )
}
