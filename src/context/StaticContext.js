import React, { createContext, useState } from 'react'
import MockedData from '../services/MockedData'

const Context = createContext({})

export function StaticContext ({children}) {
  const [CurrentContext, setContextData] = useState(MockedData)
  const OriginalContext = MockedData

  const themeColors = {
    gray: "#333"
  }

  return <Context.Provider value={{OriginalContext, CurrentContext, setContextData, themeColors}}>
    {children}
  </Context.Provider>
}

export default Context