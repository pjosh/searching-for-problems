import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setScummGames } from 'actions/scumm';
import Level4 from './Level4';

const mapStateToProps = state => ({
  scummGames: state.scumm.games
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setScummGames
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Level4);
