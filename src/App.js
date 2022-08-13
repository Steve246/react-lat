import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import ItermComponent from './component/ItermComponent';
import SearchComponent from './component/SearchComponent';



const App = () => {

  const list = [
      {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ];

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (event) => {
      console.log(event.target.value)
      setSearchTerm(event.target.value)
    }

    const searchedStories = list.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


  
  return (
    <div className="App">
      <SearchComponent searchHandle = {handleSearch}/>
      <ItermComponent  searchStory = {searchedStories}/>
    </div>
  );
}

export default App;


