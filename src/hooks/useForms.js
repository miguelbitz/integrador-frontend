import React, { useEffect, useState } from 'react'

export default function useForms(initialState) {
    const [form, setForm] = useState(initialState)

    const onChange = (e) =>{
        console.log(e.target)
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const cleanInput = () =>{
      setForm(initialState)
    }
  return {form, onChange, cleanInput}
}
