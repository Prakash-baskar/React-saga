
import { Container } from 'react-bootstrap';
import './App.css';
import Counter from './Component/Counter';
import FormPage from './Component/Form';
function App() {
  return (
    <Container>
      <Counter/>
      <FormPage/>
    </Container>
  );
}

export default App;
