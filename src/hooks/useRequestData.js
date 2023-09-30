import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/BASE_URL'
import axios from 'axios'



export default function useRequestData(initialState, path, headers) {

    const [data, setData] = useState(initialState)
    const [erro, setErro] = useState('')

    const getData = () =>{
        axios.get(`${BASE_URL}${path}`, headers)
        .then((response) => {
            setData(response.data)
        })
        .catch((erro) => {
            console.log(erro.response)
            setErro(erro.response)
        })
    }
    
    useEffect(() => {
        getData()
    }, [path])

    return [data, getData, erro]
}
