import './css/App.css'
import { Container, Accordion } from 'react-bootstrap'

function App() {
  return (
    <>
      <Container className="container">
        <h1>
          <i class="bi bi-stars"></i> FAQs
        </h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>O que é Lorem Ipsum?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur nobis
              eveniet ab? Quisquam tenetur asperiores rem exercitationem fugiat velit expedita
              veniam dignissimos doloremque? Praesentium porro molestias voluptatum sapiente
              aliquid.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>O que é Lorem Ipsum?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur nobis
              eveniet ab? Quisquam tenetur asperiores rem exercitationem fugiat velit expedita
              veniam dignissimos doloremque? Praesentium porro molestias voluptatum sapiente
              aliquid.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>O que é Lorem Ipsum?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur nobis
              eveniet ab? Quisquam tenetur asperiores rem exercitationem fugiat velit expedita
              veniam dignissimos doloremque? Praesentium porro molestias voluptatum sapiente
              aliquid.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>O que é Lorem Ipsum?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur nobis
              eveniet ab? Quisquam tenetur asperiores rem exercitationem fugiat velit expedita
              veniam dignissimos doloremque? Praesentium porro molestias voluptatum sapiente
              aliquid.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  )
}

export default App
