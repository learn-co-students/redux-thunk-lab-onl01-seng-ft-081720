import React, { Component } from 'react';

class CatList extends Component {
    render() {
        console.log(this.props.catPics)
        const cats = this.props.catPics.map(cat => <img alt="oops" src={cat.url} id={cat.id}/>)
        debugger
        return (
            <div>
                {cats}
            </div>
        );
    }
}

export default CatList;
