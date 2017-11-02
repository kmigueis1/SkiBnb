import React from 'react'

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      query: ""
    }

    this.searchHandler = this.searchHandler.bind(this);
    this.queryHandler = this.queryHandler.bind(this);
  }

  searchHandler(e){
    this.setState({query: e.target.value});
  }

  queryHandler(e){
    if (e.keyCode == 13 || e.which == 13){
      this.props.searchLocation(this.state.query);
    }
  }

  render(){

    return(
      <div className='search-bar-container'>

        <div className='search-bar'>
          <div className='magnifying-glass-search'>
            <i className="icon fa fa-search"></i>
          </div>
          <input type='text' placeholder='Search' className='search-bar-input' onKeyPress={this.queryHandler} onChange={this.searchHandler} value={this.state.query}></input>
        </div>
      </div>
    );
  }

}

export default SearchBar;
