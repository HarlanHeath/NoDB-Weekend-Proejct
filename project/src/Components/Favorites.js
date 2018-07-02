import React, { Component } from "react";
// import axios from "axios";
import "./Favorites.css";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      title: "Favorites Page"
    };
  }

  render() {
    console.log(this.props.favorites);
    let favorites = this.props.favorites.map((person, id) => {
      return (
        <div className="Favorite-Cards" key={id}>
          <p className="Fav-Names"> {person.name}</p>
          <p className="Fav-Char-Data">DOB:{person.birth_year}</p>
          <p className="Fav-Char-Data">Height:{person.height}</p>
          <p className="Fav-Char-Data">Weight:{person.mass}</p>
          <button
            className="Remove-Favs"
            onClick={() => this.props.removeFavorites(person.name)}
          >
            {" "}
            Execute Order 66{" "}
          </button>
        </div>
      );
    });

    return <div className="Favorites-Background">{favorites}</div>;
  }
}

export default Favorites;
