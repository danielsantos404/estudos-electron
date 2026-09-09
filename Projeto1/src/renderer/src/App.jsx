import './css/App.css'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Container className="py-4">
        <Form>
          <h1>Nos Contate</h1>
          <Row className="mb-3">
            <Form.Group controlId="formGridFirstName" as={Col}>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Informe seu nome..." />
            </Form.Group>

            <Form.Group controlId="formGridLastName" as={Col}>
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control type="text" placeholder="Informe seu sobrenome..." />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Informe seu email..."></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Label>Tipo de Consulta</Form.Label>
            <Form.Group as={Col} id='radio-box'>
              <Form.Check type='radio' name='opcoes' label='Consulta comum'></Form.Check>
            </Form.Group>
            <Form.Group as={Col} id='radio-box'>
              <Form.Check type='radio' name='opcoes' label='Pedido de suporte'></Form.Check>
            </Form.Group>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" id='text-box' rows='1'></Form.Control>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Check label='Eu concordo em ser contatado(a) pela equipe.'></Form.Check>
          </Form.Group>

          <Button type='submit' variant='primary' id='submit-button'>Enviar</Button>
        </Form>
      </Container>
    </>
  )
}

export default App
