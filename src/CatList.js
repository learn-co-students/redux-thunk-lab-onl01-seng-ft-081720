// write your CatList component here
import React from 'react';
class CatList extends React.Component {
    render() 
    { console.log(this.props.catPics)
    return  (
        <ul>
            {this.props.catPics.map((cat,idx) =><li key={idx}><img src={cat.url} alt={"cat"}/></li>)}
        </ul>
    )
    } 
}

export default CatList;