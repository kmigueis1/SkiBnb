import React from 'react';
import HomeTile from './home_tile'
import HomeIndexMap from '../home_map/home_index_map';

class HomesIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {
    let homes = this.props.homes.map((home) => {
      return (<HomeTile key={home.id} home={home}/>);
    })
    return (
      <div className="homes-container">
        <div className="homes-grid">
          {homes}
        </div>
        <div className="homes-map">
          <div className="homes-map-content">
            <div className="maps-wrapper">
              <HomeIndexMap homes={Object.values(this.props.homes)} updateBounds={this.props.updateBounds} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default HomesIndex
