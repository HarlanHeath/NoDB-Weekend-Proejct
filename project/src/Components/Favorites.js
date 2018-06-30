import React, {Component} from 'react'

class Favorites extends Component {
constructor(){
    super()
    this.state = {
        title="Favorites Page"
    }
}

render(){
    return(
        <div>
<p>{this.state.title}</p>

            </div>
    )
}

}

export default Favorites