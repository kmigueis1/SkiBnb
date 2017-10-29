import { connect } from 'react-redux';
import { fetchHome } from '../../actions/home_actions';
import HomeShow from './home_show';

const mapStateToProps = (state, ownProps) => {
  return {
    home: state.entities.homes[ownProps.match.params.id]
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHome: (id) => (dispatch(fetchHome(id)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeShow);
