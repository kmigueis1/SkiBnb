import { connect } from 'react-redux';
import { searchLocation } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchLocation: (query) => (dispatch(searchLocation(query)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
