export const goToHome = (navigate) =>{
    navigate('/')
}

export const goToSignUp = (navigate) =>{
    navigate('/signup')
}

export const goToFeed = (navigate) =>{
    navigate('/feed')
}

export const goToPost = (navigate, id) =>{
    navigate(`/post/${id}`)
}