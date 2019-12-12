import React from 'react';
import LevelTitle from 'components/LevelTitle';
import getScummGames from 'utils/getScummGames';
import styles from './styles.module.scss';

class Level4 extends React.Component {
  componentDidMount() {
    const { setScummGames } = this.props;

    setScummGames(getScummGames());
    setTimeout(() => {
      setScummGames([]);
    }, 3000);
  }

  render() {
    const { scummGames } = this.props;

    return (
      <div className={styles.container}>
        <LevelTitle level={4} />
        <ul className={styles.gamesList}>
          {scummGames &&
            scummGames.map(game => (
              <li>
                <div className={styles.text}>{game}</div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Level4;
