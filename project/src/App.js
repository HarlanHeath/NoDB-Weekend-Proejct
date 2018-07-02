import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./Components/navbar";
import Favorites from "./Components/Favorites";


class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
      theView: true
    };


  }

  componentDidMount() {
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

  //favs function
  switchFavsPage = datas => {
    // console.log(datas);
    this.setState({theView: datas})
  };


  
  render() {
    console.log(this.state);
    let persons = this.state.characters.map((person, id) => {
      // person is the element
      return (
        <div className="Character-Cards" key={id}>
          <p className="Char-Names"> {person.name}</p>
          <p>DOB:{person.birth_year}</p>
          <p>Height:{person.height}</p>
          <p>Weight:{person.mass}</p>
          <button
            className="Add-To-Favs"
            onClick={() => this.favoritesAdder(person)}
          >
            Add to Favorites{" "}
          </button>
        </div>
      );
    });

    // console.log(this.state.characters);
    return (
      <div className="Body">
      <div className="NavBar">
        <NavBar
          switchFavsPage={this.switchFavsPage}
        />
        </div>
        <div className="Characters">
        {this.state.theView ? persons : <Favorites favorites={this.state.favorites}/>}
        </div>
      </div>
    );
  }
}

export default App;


