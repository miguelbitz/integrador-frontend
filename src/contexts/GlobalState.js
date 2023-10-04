import { GlobalContext } from './GlobalContext'
import useRequestData from '../hooks/useRequestData'


export const GlobalState = ({ children }) => {

  const token = localStorage.getItem('token')

  const headers = {
    headers:{
      Authorization: token
    }
  }
  
  const [postArr] = useRequestData([], '/posts', headers)
  const posts = [...postArr].reverse();


  const context = {
    posts,
    token
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );

}