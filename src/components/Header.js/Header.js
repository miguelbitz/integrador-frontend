import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, useLocation } from "react-router-dom";
import { goToFeed, goToHome } from '../../routes/coordinator'
import { Cabecalho, Titulo } from './HeaderStyled'
import logoHome from '../../assets/logoHome.png'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    /* const changePage = () =>{
        if(localStorage.getItem('token')){
            goToFeed(navigate)
        } else {
            goToHome(navigate)
        }
    } */

    const handleRefresh = () => {
        window.location.reload();
    };

    const home = location.pathname === '/'
    const signup = location.pathname === '/signup'

    const changePage = () => {
        if (signup) {
            return (
                <Cabecalho>
                    <Titulo onClick={() => changePage(navigate)}>Labeddit</Titulo>
                    <button onClick={() => goToHome(navigate)}>Login</button>
                </Cabecalho>
            )
        } else if (home) {
            return (
                <div>
                </div>
            )
        }
    }

    return (
        changePage()
    )
}
