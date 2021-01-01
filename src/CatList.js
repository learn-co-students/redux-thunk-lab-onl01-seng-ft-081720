import React from 'react'

const CatList = props => {
  return(
    <div>
      <img key={props.key} src={props.catPics}/>
    </div>
  )
}

export default CatList;