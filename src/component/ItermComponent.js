


import React from 'react'
import Item from './ItemComponent'



const ItermComponent = (props) => {
 
 

  return (
    <ul>
      {props.searchStory.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>

    

  )

    
}






export default ItermComponent