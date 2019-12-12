import React from 'react';
import LevelTitle from 'components/LevelTitle';
import createBigArray from 'utils/createBigArray';
import styles from './styles.module.scss';

class Level2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  win = () => {
    createBigArray();
    this.setState({
      completed: true
    });
  };

  render() {
    const { completed } = this.state;

    return (
      <div className={styles.container}>
        <LevelTitle level={2} />
        {completed ? (
          <div className={styles.text}>you win!</div>
        ) : (
          <div className={`${styles.text} ${styles.button}`} onClick={this.win}>
            click to win
          </div>
        )}
      </div>
    );
  }
}

export default Level2;
