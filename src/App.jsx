import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokesetup: '...',
      jokepunchline: '...',
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://v2.jokeapi.dev/joke/any?type=twopart")
      .then(response => response.json())
      .then(data => this.setState({ jokesetup: data.setup, isLoading: false, jokepunchline: data.delivery }));
  }

  render() {
    const { isLoaded, jokesetup, jokepunchline } = this.state;
    return (
      <div id="maindiv">
        <p id="setup">{jokesetup}</p>
        <p id="joke">{jokepunchline}</p>
      </div>
    );
  }
}

export default App;