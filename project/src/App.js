import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import navbar from "./Components/navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: []
    };
  }

  componentDidMount() {
    axios.get("/api/people").then(res => {
      this.setState({
        characters: res.data.results
      });
    });
  }

  render() {
    let person = this.state.characters.map((elem, id) => {
      return (
        <div className="Character-Cards">
          <h1> {elem.name}</h1>
          <h3>DOB:{elem.birth_year}</h3>
          <h3>Height:{elem.height}</h3>
          <h3>Weight:{elem.mass}</h3>
          <button className="Add-To-Favs"> Click Me </button>
        </div>
      );
    });

    // console.log(this.state.characters);
    return <div className="App">{person}</div>;
  }
}

export default App;
