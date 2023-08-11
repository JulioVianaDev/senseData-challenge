import React, { useEffect, useState } from 'react'
import "./Filters.css"
import { useGlobalContext } from '../context/store'
function Filters() {
  const {valorGasto} = useGlobalContext()
  const [filterType,setFilterType] = useState("Todas")
  const [filterCategory,setFilterCategory] = useState("Todas")
  const {transactions,setTransactions,transactionsFiltered,setTransactionsFiltered} = useGlobalContext()

  useEffect(()=>{
    if(filterType == "Todas" || filterCategory == "todas"){
      setTransactionsFiltered(transactions)
    }else if(filterType == "Entrada"){
      setTransactionsFiltered(transactions.filter(t=>t.type == "Entrada"))
    }else if(filterType == "Saida"){
      setTransactionsFiltered(transactions.filter(t=>t.type != "Entrada"))
    }
    if(filterCategory == "Alimentação"){
      setTransactionsFiltered(transactions.filter(t=>t.categoria == "Alimentação"))
    }else if(filterCategory == "Lazer"){
      setTransactionsFiltered(transactions.filter(t=>t.categoria == "Lazer"))
    }else if(filterCategory == "Trabalho"){
      setTransactionsFiltered(transactions.filter(t=>t.categoria == "Trabalho"))
    }else if(filterCategory == "Transporte"){
      setTransactionsFiltered(transactions.filter(t=>t.categoria == "Transporte"))
    }else if(filterCategory == "Saúde"){
      setTransactionsFiltered(transactions.filter(t=>t.categoria == "Saúde"))
    }
    localStorage.setItem('transactions',transactions)
  },[filterType,
    filterCategory,
    transactions])
  return (
    <div className='filters'>
      <h2>Filtros</h2>
      <h3>Tipos</h3>
      <select 
          name="type"  
          onChange={(e)=>setFilterType(e.target.value)}
          className='input'
        >
          <option value="Todas">Todas</option>
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saída</option>
        </select>
        <h3>Categorias</h3>
        <select
          name="categoria" 
          onChange={(e)=>setFilterCategory(e.target.value)}
          className='input'
          >
          <option value="Todas">Todas</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select> 
    </div>
  )
}

export default Filters