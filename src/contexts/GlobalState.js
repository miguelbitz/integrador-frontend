import { GlobalContext } from './GlobalContext'


export const GlobalState = ({ children }) => {


  const context = {

  }

  return (
    <GlobalContext.Provider /* value={context} */>
      {children}
    </GlobalContext.Provider>
  );

}