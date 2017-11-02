import HomeIndexMap from './home_index_map';
import { connect } from 'react-redux';
import { resetLocation } from '../../actions/search_actions';


const mapStateToProps = (state) => {
  return {
    newLocation: state.ui.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetLocation: () => (dispatch(resetLocation()))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeIndexMap);
