
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Counter from './Component/Counter';
import FormPage from './Component/Form';
function App() {
  return (
    <Container>
      <Counter/>
      <Row className='justify-content-md-center'>
        <Col lg="6">
         < FormPage/>
         </Col>
      </Row>
    </Container>
  );
}

export default App;
