import React, { useEffect, useState } from 'react'
import { submitTransaction } from '../hooks/submitTransaction';
import { useGlobalContext } from '../context/store';
import "./Form.css"
const { v4: uuidv4 } = require('uuid');



function FormEdit() {
  const { setTransactions, transactions, valorGasto, setValorGasto,setEditMode } = useGlobalContext();
  const [newTransaction, setNewTransaction] = useState({
    title: '',
    type: "Entrada",
    categoria: "Alimentação",
    value: 0,
    id: ''
  });
  useEffect(()=>{
    console.log("editForm")
    const idEdit = localStorage.getItem("idEdit")
    const atualTransaction = transactions.filter(t=>t.id == idEdit)
    setNewTransaction(atualTransaction[0])
    localStorage.setItem('atualPrice',atualTransaction.value)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function CadastrarTransação() {
    if (newTransaction.title === '') {
      alert('proibido sem titulo');
      return;
    }

    // First, set the new transaction with a unique ID

    // Calculate the difference based on the new transaction's value
    let difference;
    const atualPrice = localStorage.getItem('atualPrice')
    if (newTransaction.type === "Entrada") {
      difference = atualPrice + newTransaction.value;
    } else {
      difference = atualPrice - newTransaction.value;
    }

    // Update valorGasto with the calculated difference
    setValorGasto(difference);
    const idEdit = localStorage.getItem("idEdit")
    let newUpdatedTransactions = transactions.map(n =>{
      if (n.id == idEdit){
        return newTransaction
      }
      return n
    })
    setTransactions(newUpdatedTransactions)
    // Finally, reset the newTransaction state
    setNewTransaction({
      title: '',
      type: "Entrada",
      categoria: "Alimentação",
      value: 0,
      id: ''
    });
  }
  // console.log(process.env.REACT_APP_TESTE)
  return (
    <div className='form'>
      <label>Titulo da transação</label>
        <input className='input digitado' type="text" value={newTransaction.title} onChange={(e)=>setNewTransaction({...newTransaction,title:e.target.value})} />  
        <label>Valor </label>
        <input className='input digitado' type="number" value={newTransaction.value} onChange={(e)=>setNewTransaction({...newTransaction,value:e.target.value})} />  

        <label htmlFor="">Escolha as opções da transação</label>
        <select 
          name="type"  
          onChange={(e)=>setNewTransaction({...newTransaction,type: e.target.value})}
          className='input'
        >
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saída</option>
        </select>
        <select
          name="categoria" 
          onChange={handleChange}
          className='input'
          >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select> 
      <button id='buttonCadastrar' onClick={()=>CadastrarTransação()}>Editar</button>
      <button id='buttonCadastrar' onClick={()=>setEditMode(false)}>Cancelar Edição</button>
    </div>
  )
}

export default FormEdit