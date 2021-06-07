import logo from './logo.svg'
import './App.css'
import { Component } from 'react'

// WE NEED TO WORK WITH LIFECYCLE METHODS
// THEY ARE USEFUL FOR INJECTING CODE INTO SPECIFIC MOMENTS OF THEIR LIFE
// THERE ARE THREE MAIN MOMENTS:
// - MOUNTING
// - UPDATING
// - UNMOUNTING

// - CONSTRUCTOR <-- useless 90% nowadays
// - RENDER <-- we used it all the times, its purpose is to render the JSX
// - COMPONENTDIDMOUNT <-- just happens ONCE, every time a component appears on the page
// - COMPONENTDIDUPDATE <-- pretty hard in the beginning, useful for managing a component already mounted
// - COMPONENTWILLUNMOUNT <-- useful for managing the unmounting process

// WE CAN WRITE ONE OF THEM (render), ALL OF THEM
// IT'S UP TO US

// THEY ARE CLASS METHODS, LET'S CONVERT APP INTO A CLASS

class App extends Component {
  constructor(props) {
    super(props) // super is invoking the constructor of Component
    console.log('constructor')
    // here you can put whatever you want to happen BEFORE the initial render
    // IN THE EARLY DAYS, YOU WANTED A CONSTRUCTOR FOR TWO MAIN REASONS:
    // 1) CREATING A STATE
    // 2) BINDING THE 'THIS' INTO YOUR OWN EVENT HANDLERS DEFINED IN ES5 SYNTAX
    // this.logState = this.logState.bind(this)
  }

  state = {
    counter: 0,
  }

  componentDidMount() {
    console.log('App just finished mounting')
    // this usually is the perfect place for LONG or EXPENSIVE operations
    // like data/obj/array manipulation
    // because they are gonna be performed JUST ONCE
    // and they will NOT block initial render
    // fetch()
    // here is also safe to do a setState (again, because it will just happen once)
  }

  logState = () => {
    console.log(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    // this will be fired everytime there's a change in the props or in the state of this component
    console.log('in componentDidUpdate')
    // this will not get fired initially
    // prevProps and prevState are handy for putting a CONDITION into your componentDidUpdate
    // that condition will prevent usually an infinite loop, pulling the handbrake for you!
  }

  render() {
    console.log('this is a render of App')

    // render is the only mandatory method in a class component
    // it's useful to render the JSX and show the component

    // we're getting into the render() method EVERY TIME
    // there's a change in the STATE or in the PROPS of this component

    return (
      <div className="App" onClick={this.logState}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.counter}
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
