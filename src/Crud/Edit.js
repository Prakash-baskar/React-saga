import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from './Action';

const Edit = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const {id} = useParams();

    const userUpdate = useSelector((state) => state.users.find(user =>user.id ===id));
    useEffect(() =>{
            dispatch(getById(id));
    },[dispatch,id]);

    useEffect(() =>{
        if(userUpdate){
            setName(userUpdate.name || '');
            setPassword(userUpdate.password || '');
        }
    }, [userUpdate]);
  return (
    <div>
        <div className='nav'>
        <h2>EDIT FORM</h2>
       </div>
       <div className='formhead'>
      <form>
        <h2 className='register'> Register</h2>
        <div>
            <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
            <label>Password</label>
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

export default Edit
