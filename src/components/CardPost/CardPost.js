import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/coordinator'
import { Card } from './CardPostStyled'

export default function CardPost({ post }) {
  const navigate = useNavigate()
  return (
    <Card onClick={()=>{goToPost(navigate, post.id)}}>
      <p>Enviado por: {post.creator.nickname}</p>
      <p>{post.content}</p>
    </Card>
  )
}
