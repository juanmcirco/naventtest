import React, { createContext, useState } from 'react'
import MockedData from '../services/MockedData'

const Context = createContext({})

export function StaticContext ({children}) {
  const [CurrentContext, setContextData] = useState(MockedData)
  const OriginalContext = MockedData

  return <Context.Provider value={{OriginalContext, CurrentContext, setContextData}}>
    {children}
  </Context.Provider>
}

export default Context