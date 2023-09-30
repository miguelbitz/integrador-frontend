import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../routes/coordinator'
import { Card } from './CardPostStyled'

export default function CardPost({ post }) {
  const navigate = useNavigate()
  return (
    <Card onClick={()=>{goToPost(navigate, post.id)}}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>@{post.username} - {post.commentCount || 0} comentários</p>
    </Card>
  )
}
