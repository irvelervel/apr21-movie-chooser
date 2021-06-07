import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

class Home extends Component {

    state = {
        movieTitle: 'Batman Begins'
    }

    changeMovie = (e) => {
        this.setState({
            movieTitle: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                        {/* LET'S WRITE A CONTROLLED INPUT */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label style={{ color: 'white' }}>CHOOSE YOUR MOVIE</Form.Label>
                            <Form.Control as="select" onChange={this.changeMovie} value={this.state.movieTitle}>
                                <option>Batman Begins</option>
                                <option>Wonder Woman</option>
                                <option>Man of Steel</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home