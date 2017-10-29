import React from 'react';
import HomeTile from './home_tile'

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

        </div>
      </div>
    );
  }
}


export default HomesIndex
