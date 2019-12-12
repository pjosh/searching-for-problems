import React from 'react';
import GameItem from 'components/Level5/GameItem';
import styles from './styles.module.scss';

class GameList extends React.Component {
  onClickGame = game => {
    const { requestCharacters } = this.props;

    requestCharacters(game);
  };

  render() {
    const { characters, games } = this.props;

    return (
      <ul className={styles.container}>
        {games &&
          games.map(game => {
            const charactersCount =
              characters && characters[game.title] ? characters[game.title].length : null;

            return (
              <li key={game.title}>
                <GameItem
                  game={game}
                  onClick={this.onClickGame}
                  charactersCount={charactersCount}
                />
              </li>
            );
          })}
      </ul>
    );
  }
}

export default GameList;
