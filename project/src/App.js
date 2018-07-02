import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Favorites from "./Components/Favorites";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
      theView: true,
      input: ""
    };
    this.removeFavorites = this.removeFavorites.bind(this);
    this.addCharacter = this.addCharacter.bind(this);
  }

  componentDidMount() {
    axios.get("/api/people").then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  favoritesAdder(person) {
    // console.log(person);
    axios
      .post("/api/people", { person })
      .then(response => this.setState({ favorites: response.data }));
  }

  removeFavorites(name) {
    // console.log(person);
    axios.delete(`/api/people/${name}`).then(response =>
      this.setState({
        favorites: response.data
      })
    );
  }

  //favs function
  switchFavsPage = datas => {
    // console.log(datas);
    this.setState({ theView: datas });
  };

  handleInput(val) {
    this.setState({
      input: val
    });
  }

  addCharacter() {
    let { input } = this.state;
    axios.post(`/api/addPerson`, { input }).then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  render() {
    // console.log(this.state);

    let { input } = this.state;
    let persons = this.state.characters
      .filter(elem => elem.name.includes(input))
      .map((person, id) => {
        // person is the element
        return (
          <div className="Character-Cards" key={id}>
            <p className="Char-Names"> {person.name}</p>
            <p className="Char-Data">DOB:{person.birth_year}</p>
            <p className="Char-Data">Height:{person.height}</p>
            <p className="Char-Data">Weight:{person.mass}</p>
            <button
              className="Add-To-Favs"
              onClick={() => this.favoritesAdder(person)}
            >
              Add to Favorites{" "}
            </button>
          </div>
        );
      });

    return (
      <div className="Body">
        <div className="NavBar">
          <NavBar switchFavsPage={this.switchFavsPage} />
          <input
            placeholder="Find Star Wars Character"
            onChange={e => this.handleInput(e.target.value)}
          />
          <button onClick={this.addCharacter}>Add Character</button>
        </div>
        <div className="Characters">
          {this.state.theView ? (
            persons
          ) : (
            <Favorites
              favorites={this.state.favorites}
              removeFavorites={this.removeFavorites}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
