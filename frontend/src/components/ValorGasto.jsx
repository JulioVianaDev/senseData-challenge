import React from 'react'
import "./ValorGasto.css"
import { useGlobalContext } from '../context/store'
function ValorGasto() {
  const {valorGasto} = useGlobalContext()
  return (
    <div className='valorGasto'>
      <div>Saldo Atual</div>
      <div>
        {valorGasto}
      </div>
    </div>
  )
}

export default ValorGasto