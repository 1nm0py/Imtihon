import {  Container, Row } from 'react-bootstrap'

import './App.css'

import Input from './componets/input_part/input_part'
import Show from './componets/show_part/show'

function App() {

  return (
    <div className='box'>
        <Container>
          <Row className='justify-content-around align-items-center'>
            {/* <Col lg="10"> */}
              <Input />
              <Show />
            {/* </Col> */}
          </Row>
        </Container>
    </div>
  )
}

export default App
