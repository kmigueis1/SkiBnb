import HomesIndex from './homes_index';
import { connect } from 'react-redux';
import { fetchHomes } from '../../actions/home_actions';
 // fetchHome, createHome, updateHome, deleteHome
const mapStateToProps = (state) => {
  return {
    homes: Object.values(state.entities.homes)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomes: () => (dispatch(fetchHomes()))
    // fetchHome: (id) => (dispatch(fetchHome(id))),
    // createHome: (home) => (dispatch(createHome(home))),
    // updateHome: (home) => (dispatch(updateHome(home))),
    // deleteHome: (id) => (dispatch(deleteHome(id)))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomesIndex);
