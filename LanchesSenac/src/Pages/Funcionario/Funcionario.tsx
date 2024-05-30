import { Col, Container, ListGroup, Row } from "react-bootstrap";


const Funcionario = () => {
    return (
        <div>
            <Container>
                <Row>
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
            <Container>
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
        </div>
    ); 
}

export default Funcionario;