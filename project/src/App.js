import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./Components/navbar";
// import navbar from "./Components/navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
      // theView: <Person />
    };

    // this.bind.thanosManTron = this.bind.thanosManTron(this) // using arrow function instead
  }

  componentDidMount() {
    // fires off when user hits your website
    axios.get("/api/people").then(res => {
      this.setState({
        characters: res.data.results
      });
    });
  }

  favoritesAdder(person) {
    console.log(person);
    axios
      .post("/api/people", { person })
      .then(response => this.setState({ favorites: response.data }));
  }

  thanosManTron = datas => {
    console.log(datas);
  };

  render() {
    console.log(this.state);
    let persons = this.state.characters.map((person, id) => {
      // person is the element
      return (
        <div className="Character-Cards" key={id}>
          <h1> {person.name}</h1>
          <h3>DOB:{person.birth_year}</h3>
          <h3>Height:{person.height}</h3>
          <h3>Weight:{person.mass}</h3>
          <button
            className="Add-To-Favs"
            onClick={() => this.favoritesAdder(person)}
          >
            Click Me{" "}
          </button>
        </div>
      );
    });

    // console.log(this.state.characters);
    return (
      <div className="App">
        {persons}

        <NavBar
          fudgeMonkeys={this.state.characters}
          thanManTron={this.thanosManTron}
        />
        {/* <Favorites favorites={this.state.favorites}/> */}
      </div>
    );
  }
}

export default App;
