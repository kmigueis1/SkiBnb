import HomeIndexMap from './home_index_map';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    newLocation: state.ui.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeIndexMap);
