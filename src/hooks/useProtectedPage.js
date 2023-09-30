import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { goToHome } from "../routes/coordinator"



export default function useProtectedPage(){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
        goToHome(navigate)
        }
    },[navigate])
}
