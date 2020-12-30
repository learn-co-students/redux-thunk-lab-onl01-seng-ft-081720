// write your CatList component here
import React from 'react';

class CatList extends React.Component {
  displayCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.displayCats()}
      </div>
    )
  }
}

export default CatList;