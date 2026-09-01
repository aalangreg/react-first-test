import './App.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Menu from './components/Menu'; 
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Container>

        <Row>
            <h1>bonjour bootstrap</h1>
            <Button variant="primary">Bouton bootstrap</Button>
            <p>Paragraphe bootstrap</p>
            <p>Paragraphe bootstrap numero 2</p>
        </Row>

        <Row>
            <Col className="text-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
            </Col>
            <Col className="text-center">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </Col>
            <Col className="text-center">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
            </Col>
        </Row>

        <Row>
            <Col className="border border-dark p-2">
              <NavBar />
            </Col>   
       </Row>
        <Row>                   
            <Col xs={8} className="border border-dark p-2">
              <h1>Image</h1>
            </Col>
            <Col xs={4} className="border border-dark p-2">
              <Menu />
            </Col>
        </Row>
        <Row>
            <Col className="border border-dark p-2">
              <h1>Contenu</h1>
            </Col>   
        </Row>
        <Row>                   
            <Col xs={8} className="border border-dark p-2">
              <h1>menu</h1>
            </Col>
            <Col xs={4} className="border border-dark p-2">
              <Footer />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App; 
