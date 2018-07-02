import React, {Component} from 'react'

class Favorites extends Component {
constructor(){
    super()
    this.state = {
        title: "Favorites Page"
    }
}

render(){
console.log(this.props.favorites);
    let favorites = this.props.favorites.map((person, id) => {
        return (
            <div className="Character-Cards" key={id}>
                      <h1> {person.name}</h1>
          <h3>DOB:{person.birth_year}</h3>
          <h3>Height:{person.height}</h3>
          <h3>Weight:{person.mass}</h3>
        </div>
        )
});


    return(
        <div>
{favorites}
</div>


    )
}

}

export default Favorites