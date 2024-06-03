
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './Action'
import { useNavigate } from 'react-router-dom'



const Form = () => {
     
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate= useNavigate();

     const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addItem({name,password}))
        navigate('/Table');
        setName("");
        setPassword('');
      
     }
  return (
    <div>
      <div className='nav'>
        <h2>Registeration Crud</h2>
      </div>
    <div className='formhead'>
      <form onSubmit={ handleSubmit}>
        <h2 className='register'> Register </h2>
        <div>
            <label>Name</label><br></br>
            <input value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
            <label>Password</label><br></br>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div className='submit'>
            <button className='sub'>Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Form
