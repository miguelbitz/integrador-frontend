import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPost from '../../components/CardPost/CardPost'
import CreatePost from '../../components/CreatePost/CreatePost'
import useProtectedPage from '../../hooks/useProtectedPage'
import { CreatePostContainer, FeedContainer, Line } from './FeedStyled'
import { goToHome } from '../../routes/coordinator'
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"
import line from '../../assets/line.png'



export default function Feed() {
  useProtectedPage()
  const navigate = useNavigate()

  const { token, posts } =  useContext(GlobalContext)

  useEffect(()=>{
    if(!token){
      goToHome(navigate)
    }
  },[])

  return (
    <FeedContainer>
      <CreatePostContainer>
        <CreatePost />
      </CreatePostContainer>
      <Line src={line} alt="line" />
      {
        posts.map((post) => {
          return <CardPost key={post.id} post={post} />
        })
      }
    </FeedContainer>
  )
}
