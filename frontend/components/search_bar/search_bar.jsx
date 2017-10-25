import React from 'react'

class SearchBar extends React.Component {

  render(){

    return(
      <div className='search-bar-container'>
        <div className='search-bar'>
          <input type='text' placeholder='Search' className='search-bar-input'></input>
        </div>
      </div>
    );
  }

}

export default SearchBar;
