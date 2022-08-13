

import React from 'react'

const SearchComponent = (props) => {

  return (
    <div>
        <h1> Hacker News </h1>
        <input type = "text" id = "search" onChange={props.searchHandle}/>
    </div>
  )
}

export default SearchComponent