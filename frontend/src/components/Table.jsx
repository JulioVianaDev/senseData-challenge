import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/store'
import { getTransactions } from '../hooks/getTransactions'
import TransationRow from './TransationRow'
import "./Table.css"
function Table() {
  const {transactions,setTransactions,transactionsFiltered} =useGlobalContext()
  // useEffect(()=>{
  //   let atualTransactions = getTransactions().then(res=>setTransactions(res))
  // },[])
  return (
    <div className='tabela'>
      <div className='tableRow'>
        <div>
          Titulo
        </div>
        <div>
          Valor
        </div>
        <div>
          Categoria
        </div>
        <div>
          Tipo
        </div>
        <div>
          Editar
        </div>
        <div>
          Deletar
        </div>
      </div>
      {transactionsFiltered.map(t=><h2 key={t.id}><TransationRow {...t}/></h2>)}
    </div>
  )
}

export default Table