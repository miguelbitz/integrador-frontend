import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPost from '../../components/CardPost/CardPost'
import CreatePost from '../../components/CreatePost/CreatePost'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { FeedContainer } from './FeedStyled'
import { goToHome } from '../../routes/coordinator'


export default function Feed() {
  useProtectedPage()
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  const headers = {
    headers:{
      Authorization: token
    }
  }
  const [posts] = useRequestData([], '/posts', headers)

  useEffect(()=>{
    if(!token){
      goToHome(navigate)
    }
  },[])

  return (
    <FeedContainer>
      <h1>Feed</h1>
      <section>
        <h3>Novo post</h3>
        <CreatePost />
      </section>
      {
        posts.map((post) => {
          return <CardPost key={post.id} post={post} />
        })
      }
    </FeedContainer>
  )
}
