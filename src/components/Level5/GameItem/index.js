import React from 'react';
import styles from './styles.module.scss';

class GameItem extends React.Component {
  onClickGame = () => {
    const { game, onClick } = this.props;

    onClick(game.title);
  };

  render() {
    const { charactersCount, game } = this.props;

    return (
      <div className={styles.container} onClick={this.onClickGame}>
        {game.title}
        {charactersCount !== null ? ` (PJs: ${charactersCount})` : null}
      </div>
    );
  }
}

export default GameItem;
