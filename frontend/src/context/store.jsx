import { createContext, useContext,useState } from "react";

const Context = createContext()

export const GlobalContextProvider=({children})=>{
  const [transactions,setTransactions] = useState([])
  const [transactionsFiltered,setTransactionsFiltered] = useState([])
  const [valorGasto,setValorGasto] = useState(0)
  const [editMode,setEditMode] = useState(0)
  return (
    <Context.Provider value={{editMode,setEditMode,transactions,setTransactions,valorGasto,setValorGasto,transactionsFiltered,setTransactionsFiltered}}>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => useContext(Context);