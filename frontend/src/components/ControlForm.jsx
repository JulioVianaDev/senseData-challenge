import React from 'react'
import { useGlobalContext } from '../context/store'
import Form from './Form'
import FormEdit from './FormEdit'
function ControlForm() {
  const {editMode,setEditMode} = useGlobalContext()

  var currentPageComponent;
  if (editMode) {
    currentPageComponent =<FormEdit/> ;
  }
  else{
    currentPageComponent = <Form/> ;
  }
  return (<>
    {currentPageComponent}
    </>
  )
}

export default ControlForm