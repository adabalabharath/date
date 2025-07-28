import React from 'react'

export const AcceptanceContext = React.createContext();
const AcceptanceContextProvider = ({children}) => {
    const [acceptance, setAcceptance] = React.useState(false);
  return (
    <AcceptanceContext.Provider value={{acceptance, setAcceptance}}>{children}</AcceptanceContext.Provider>
  )
}

export default AcceptanceContextProvider