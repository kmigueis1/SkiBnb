import HomesIndex from './homes_index';
import { connect } from 'react-redux';
import { fetchHomes } from '../../actions/home_actions';
import { updateBounds } from '../../actions/filter_actions';
const mapStateToProps = (state) => {
  return {
    homes: Object.values(state.entities.homes),
    loading: state.ui.loader.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomes: () => (dispatch(fetchHomes())),
    updateBounds: (bounds) => (dispatch(updateBounds(bounds)))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomesIndex);
