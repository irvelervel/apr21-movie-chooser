import { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import Movie from './Movie'

class Home extends Component {

    state = {
        movieTitle: 'Man of Steel',
        showMovieSection: true
    }

    changeMovie = (e) => {
        // console.log(e.target.value)
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
                            <Form.Control as="select" value={this.state.movieTitle} onChange={this.changeMovie}>
                                <option>Batman Begins</option>
                                <option>Wonder Woman</option>
                                <option>Man of Steel</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                        <div>
                            {this.state.showMovieSection && <Movie selectedMovie={this.state.movieTitle} />}
                            <Button variant="success" onClick={() => this.setState({ showMovieSection: !this.state.showMovieSection })}>CLICK ME</Button>
                        </div>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Home