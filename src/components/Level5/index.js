import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestGames, requestCharacters } from 'actions/finalFantasy';
import Level5 from './Level5';

const mapStateToProps = state => ({
  games: state.finalFantasy.games,
  characters: state.finalFantasy.characters
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestGames,
      requestCharacters
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Level5);
