import React from 'react';
import HomeTile from './home_tile'
import HomeIndexMapContainer from '../home_map/home_index_map_container';

class HomesIndex extends React.Component {
  constructor (props) {
    super(props);
    console.log("YO HOMESINDEX WAS JUST INSTANTIATED!!!!!!!!!!!!!!");
  }

  componentDidMount() {

  }

  render() {
    let homes = this.props.homes.map((home) => {
      return (<HomeTile key={home.id} home={home}/>);
    })
    if (homes.length === 0 && !this.props.loading){
      homes = (
        <div className="no-results">
          <div className="no-results-header"><span>No results</span></div>
          <div className='search-suggestions'>
            <span>Try adjusting your search. Here are some ideas: </span>
            <ul>
              <li> Change your filters</li>
              <li>Zoom out on the map</li>
              <li>Search for a specific place</li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="homes-container">
        {this.props.loading && <div className="loader">Loading...</div>}

        <div className="homes-grid">
          {homes}
        </div>
        <div className="homes-map">
          <div className="homes-map-content">
            <div className="maps-wrapper">
              <HomeIndexMapContainer homes={Object.values(this.props.homes)} updateBounds={this.props.updateBounds} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default HomesIndex
