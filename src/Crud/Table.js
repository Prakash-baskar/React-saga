
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from './Action';
import { Link } from 'react-router-dom';


const Table = () => {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect ( () =>{
            dispatch(getItem());
    },[dispatch]);

    
  return (
    <div>
         <table className='th'>
        <thead>
            <tr>
                <th>FNAME</th>
                <th>Password</th> 
            </tr>
        </thead>
       <tbody>
        {users.map((user)=>(
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.password}</td>
          <td>
            <button ><Link  to={`/Table/${user.id}/edit`}>Edit</Link> </button>
          </td>
        </tr>
       ))}
    
       </tbody>
      </table>
    </div>
  )
}

export default Table
