import React from 'react'
import Table from 'react-bootstrap/Table';

const TableList = () => {
 
    return (
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
              <td><button>Edit</button> <button>Delete</button></td>
            </tr>
          </tbody>
        </Table>
      );
    }

export default TableList
