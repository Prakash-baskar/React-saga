import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import MyVerticallyCenteredModal from './UpdateTask'




const TableList = () => {
  const UpdateTask = ()=>{
    setModalShow(true)
  }
 
  const [modalShow,setModalShow] = useState(false)
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><button   onClick={() =>UpdateTask()}>Edit</button> <button>Delete</button></td>
            </tr>
          </tbody>
        </Table>


        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
      );
    }

export default TableList
