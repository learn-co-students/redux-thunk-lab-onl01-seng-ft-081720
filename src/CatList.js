// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {


render() {
        console.log(this.props)
        return <div>Catlist
            {this.props.catPics.map(cat => <img src={cat.url} alt="hi" id={cat.id}/>)}
        </div> 
    }
}

export default CatList