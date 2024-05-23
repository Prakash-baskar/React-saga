import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function FormPage() {

  const [title, setTitle] = useState('')
  const [description,setDescription] = useState('')

  const addTask = (e) =>{
    e.preventDefault();
    console.log(title,description);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Tittle</Form.Label>
        <Form.Control type="text" placeholder="enter task tittle" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="enter task" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <div className='text-end'>
      <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
        AddTask
      </Button>
      </div>
    </Form>
  );
}

export default  FormPage;