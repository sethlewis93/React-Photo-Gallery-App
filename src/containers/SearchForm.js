import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../UserContext';
import {apiKey} from '../config.js'

function SearchForm() {

  let [userSearch, setUserSearch] = useState("")
  const {setsearchedPhotos} = useContext(UserContext)
  const history = useHistory() 

  const onSearchChange = e => {
    setUserSearch(e.target.value)
  }

  const handleSubmit = e => { 
    e.preventDefault();

    let path = `${userSearch.value}`;

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${path}&per_page=24&format=json&nojsoncallback=1`)
      .then(history.push(path))
      .then(res => res.json())
      .then(data => setsearchedPhotos(data.photos.photo))

    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        onChange={onSearchChange}
        type="search" 
        name="search" 
        ref={(input) => userSearch = input}
        placeholder="Search" 
        required 
        />
      <button type="submit" className="search-button">
        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </button>
    </form>
  );
}

export default SearchForm;
