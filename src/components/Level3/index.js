import React from 'react';
import LevelTitle from 'components/LevelTitle';
import createBigArrayWithLeak from 'utils/createBigArrayWithLeak';
import styles from './styles.module.scss';

class Level3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
    };
  }

  win = () => {
    const { times } = this.state;

    this.setState(
      {
        times: times + 1
      },
      () => createBigArrayWithLeak()
    );
  };

  renderWinText() {
    const { times } = this.state;

    if (times === 1) {
      return <div className={styles.text}>again please...</div>;
    }
    if (times > 1) {
      return <div className={styles.text}>you win!</div>;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.container}>
        <LevelTitle level={3} />
        {this.renderWinText()}
        <div className={`${styles.text} ${styles.button}`} onClick={this.win}>
          click to win
        </div>
      </div>
    );
  }
}

export default Level3;
