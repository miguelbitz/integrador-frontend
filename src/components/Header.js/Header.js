import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { ContainerHeader, Title, Img, Back, BackImg } from './HeaderStyled'
import logoHeader from '../../assets/logoHeader.png'
import backpage from '../../assets/backpage.png'

export default function Header() {
    const location = useLocation()

    const handleRefresh = () => {
        window.location.reload();
    };

    const home = location.pathname === '/'
    const signup = location.pathname === '/signup'
    const feed = location.pathname === '/feed'
    const detailPage = location.pathname.startsWith('/post/')

    const changePage = () => {
        if (signup) {
            return (
                <ContainerHeader>
                    <Img onClick={() => handleRefresh()} src={logoHeader} alt="logoHeader" />
                    <Title to='/'>
                        Entrar
                    </Title>
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
                    <Title to='/'>
                        Logout
                    </Title>
                </ContainerHeader>
            )
        }else if (detailPage) {
            return (
                <ContainerHeader>
                    <Back to='/feed'>
                        <BackImg src={backpage} alt='backpage'/>
                    </Back>
                    <Img onClick={() => handleRefresh()} src={logoHeader} alt="logoHeader" />
                    <Title to='/'>
                        Logout
                    </Title>
                </ContainerHeader>
            )
        }
    }

    return (
        changePage()
    )
}
