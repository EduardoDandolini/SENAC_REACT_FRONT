import './Funcionario.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";


const Funcionario = () => {
    return (
        <div className="stack-of-records">
            <Form>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            <Container className='header-of-records'>
                <Container>
                    <Row className='header-row-records'>
                        <Col smsm={4} >
                            <label>Id</label>
                        </Col>
                        <Col>
                            <label>Nome</label>
                        </Col>
                        <Col>
                            <label>Cargo</label>
                        </Col>
                    </Row>
                </Container>
                <Container className='conteiner-record'>
                    <Row>
                        <Col sm={4} >
                            <label>123</label>
                        </Col>
                        <Col>
                            <label>Rafael Floriano</label>
                        </Col>
                        <Col>
                            <label>Programador</label>
                        </Col>
                    </Row>
                </Container>
                <Container className='conteiner-record'>
                    <Row>
                        <Col sm={4} >
                            <label>124</label>
                        </Col>
                        <Col>
                            <label>Sara Mi Amore</label>
                        </Col>
                        <Col>
                            <label>Futura Medoca</label>
                        </Col>
                    </Row>
                </Container>
                <Container className='conteiner-record'>
                    <Row>
                        <Col sm={4} >
                            <label>125</label>
                        </Col>
                        <Col>
                            <label>Gaúcho</label>
                        </Col>
                        <Col>
                            <label>Aposentado</label>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    ); 
}

export default Funcionario;