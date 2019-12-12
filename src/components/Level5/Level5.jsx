import React from 'react';
import LevelTitle from 'components/LevelTitle';
import styles from './styles.module.scss';
import GameList from './GameList';

class Level5 extends React.Component {
  componentDidMount() {
    const { requestGames } = this.props;

    requestGames();
  }

  render() {
    const { characters, games, requestCharacters } = this.props;

    return (
      <div className={styles.container}>
        <LevelTitle level={5} />
        <GameList characters={characters} games={games} requestCharacters={requestCharacters} />
      </div>
    );
  }
}

export default Level5;
