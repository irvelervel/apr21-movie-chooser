import { Component } from 'react'

class Movie extends Component {

    timer = null

    state = {
        movie: null
    }

    componentDidMount = async () => {
        console.log('componentDidMount of Movie!')
        this.fetchMovie()
        this.timer = setInterval(() => console.log('counting...'), 1000)
    }

    fetchMovie = async () => {
        // FIRES AFTER THE INITIAL RENDER, WHICH HAS SKIPPED ON PURPOSE THE IMG BECAUSE this.state.movie WAS NULL
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=24ad60e9&s=' + this.props.selectedMovie)
            if (response.ok) {
                // console.log(response)
                let data = await response.json()
                // console.log(data.Search[0])
                this.setState({
                    movie: data.Search[0]
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        // will listen to any change in the PROPS or in the STATE
        console.log('MOVIE GOT UPDATED!')
        // we need to do the fetch just if there was a change in the PROPS
        // not the state...
        console.log(prevProps.selectedMovie)
        console.log(this.props.selectedMovie)
        if (prevProps.selectedMovie !== this.props.selectedMovie) {
            // this condition will prevent the Infinite Loop
            this.fetchMovie()
            // every time you do a setState in a componentDidUpdate
            // you need to pull the handbrake with a condition
            // you need to know if you're entering here because of a prop change
            // or because a state change
        }
        // COMPONENTDIDUPDATE is useful when your component is ALREADY MOUNTED
    }

    componentWillUnmount() {
        console.log('MOVIE IS GOING TO BE UNMOUNTED')
        clearInterval(this.timer)
    }

    render() {
        console.log('RENDER OF MOVIE')
        // will listen to any change in the PROPS or in the STATE
        return (
            <div style={{ color: 'white' }}>
                {/* {this.state.movie && <img src={this.state.movie.Poster} style={{ width: '200px' }} alt="movie pic" />} */}
                {this.state.movie
                    ? <img src={this.state.movie.Poster} style={{ width: '200px' }} alt="movie pic" />
                    : <h1>LOADING...</h1>}
            </div>
        )
    }
}

export default Movie