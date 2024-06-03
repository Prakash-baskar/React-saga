

import './App.css';
import Edit from './Crud/Edit';
import Form from './Crud/Form';
import Table from './Crud/Table';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Form/>}></Route>
     <Route path="/Table" element={<Table/>}></Route>
     <Route path="/Table/:id/edit" element={<Edit/>}></Route>
    </Routes> 
   </BrowserRouter>
  );
}

export default App;
